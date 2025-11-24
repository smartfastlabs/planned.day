from fastapi import APIRouter

from planned.objects import Event
from planned.repositories import event_repo

router = APIRouter()


@router.get("/")
async def list_events() -> list[Event]:
    return await event_repo.search()
