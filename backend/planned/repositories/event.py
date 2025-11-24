from .base import BaseRepository
from planned.objects import Event


class EventRepository(BaseRepository[Event]):
    Object = Event
    _prefix = "events"
