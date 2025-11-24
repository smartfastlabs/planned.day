import datetime

from .base import BaseRepository
from planned.objects.routine import RoutineInstance
from planned.utils.json import read_directory


class RoutineInstanceRepository(BaseRepository[RoutineInstance]):
    Object = RoutineInstance
    _prefix = "routine_instances"
