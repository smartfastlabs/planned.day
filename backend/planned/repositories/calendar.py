from .base import BaseRepository
from planned.objects import Calendar


class CalendarRepository(BaseRepository[Calendar]):
    Object = Calendar
    _prefix = "calendars"
