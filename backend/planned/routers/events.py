from fastapi import APIRouter

from planned.utils.dates import get_current_date
from planned.objects import Event
from planned.repositories import event_repo

router = APIRouter()


@router.get("/today")
async def today() -> list[Event]:
    return await event_repo.search(get_current_date())
