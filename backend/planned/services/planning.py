import datetime
from .base import BaseService

from planned import objects
from planned.repositories import event_repo
from .routine import routine_svc



class PlanningService(BaseService):
    async def schedule_day(self, date: datetime.date):
        events: list[objects.Event] = await event_repo.search(date)
        routine_instances: list[objects.RoutineInstance] = routine_svc.schedule(date)

        breakpoint()

planning_svc = PlanningService()