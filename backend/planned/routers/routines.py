from fastapi import APIRouter

from planned.objects import Routine, RoutineInstance
from planned.repositories import routine_repo

router = APIRouter()


@router.get("/")
async def list_routines() -> list[Routine]:
    return await routine_repo.search()


@router.get("/today")
async def list_todays_routine_instances() -> list[RoutineInstance]:
    return await routine_service.get_instances()
