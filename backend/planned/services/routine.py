import datetime
from .base import BaseService

from planned import objects
from planned.utils.dates import get_current_date
from planned.objects import RoutineInstance, Routine
from planned.repositories import routine_repo, routine_instance_repo


def is_routine_active(routine: objects.Routine, date:  datetime.date) -> bool:
    if routine.schedule_days:
        if date.weekday() not in routine.schedule_days:
            return False

    return True

class RoutineService(BaseService):
    async def schedule(self, date: datetime.date | None = None) -> list[RoutineInstance]:
        if date is None:
            date = get_current_date()

        await routine_instance_repo.delete_by_date(date)
        result: list[RoutineInstance] = []

        for routine in await routine_repo.search():
            if is_routine_active(routine, date):
                result.append(
                    objects.RoutineInstance(
                        routine=routine,
                        date=date,
                    )
                )

        return result


routine_svc = RoutineService()