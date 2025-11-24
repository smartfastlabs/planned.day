from .base import BaseService
from datetime import date

from planned.utils.dates import get_current_date
from planned.objects import RoutineInstance, Routine
from planned.repositories import routine_repo


class RoutineService(BaseService):
    async def get_instances(self, day: date | None = None) -> list[RoutineInstance]:
        if date is None:
            date = get_current_date()

        routines: list[Routine] = await routine_repo.search()
        instances: list[RoutineInstance] = await routine_repo.get_instances(date)

    async def create_instances(self, day: date | None = None) -> list[RoutineInstance]:
        pass
