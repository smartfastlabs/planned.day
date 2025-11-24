import datetime
from .base import BaseService


class PlannerService(BaseService):
    async def schedule_day(self, date: datetime.date):
        # sync all events
        # create all instances
        pass
