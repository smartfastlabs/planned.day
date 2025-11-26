import asyncio
import sys
from collections.abc import AsyncIterator
from contextlib import asynccontextmanager
from typing import Never

from loguru import logger

logger.add(
    sys.stdout, colorize=True, format="<green>{time}</green> <level>{message}</level>"
)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware

from planned import routers, settings
from planned.services import calendar_svc


@asynccontextmanager
async def init_lifespan(app: FastAPI) -> AsyncIterator[Never]:
    """
    Lifespan context manager for FastAPI application.
    """

    logger.info("Starting up...")

    async def run() -> None:
        while True:
            try:
                logger.info("Syncing events...")
                await calendar_svc.sync_all()
            except Exception as e:
                logger.info(f"Error during sync: {e}")
            await asyncio.sleep(60 * 10)

    try:
        task = asyncio.create_task(run())
    except Exception as e:
        logger.info(f"Error during startup: {e}")
        breakpoint()

    yield  # type: ignore
    logger.info("Shutting down...")
    task.cancel()


app = FastAPI(
    title="Planned.day",
    description="API for managing calendar events",
    debug=settings.DEBUG,
    lifespan=init_lifespan,
)


app.add_middleware(
    SessionMiddleware,
    secret_key="secret-key",  # TODO: Move to settings
)

# Set all CORS enabled origins
if settings.ENVIRONMENT == "development":
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
else:
    origins = [
        "planned.day",
    ]
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["GET", "POST", "PUT", "DELETE"],
        allow_headers=["*"],
    )

app.include_router(
    routers.router,
    prefix=settings.API_PREFIX,
)


@app.get("/health")
def health_check() -> dict[str, str]:
    """
    Health check endpoint.
    """
    return {"status": "healthy"}
