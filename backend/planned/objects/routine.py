from datetime import date, datetime, time
from enum import Enum

from .base import BaseObject


class TaskType(str, Enum):
    EVENT = "EVENT"
    CHORE = "CHORE"
    ERRAND = "ERRAND"
    ACTIVITY = "ACTIVITY"


class TimingType(str, Enum):
    DEADLINE = "DEADLINE"
    FIXED_TIME = "FIXED_TIME"
    TIME_WINDOW = "TIME_WINDOW"
    FLEXIBLE = "FLEXIBLE"


class Frequency(str, Enum):
    DAILY = "DAILY"
    CUSTOM_WEEKLY = "CUSTOM_WEEKLY"
    ONCE = "ONCE"
    YEARLY = "YEARLY"
    MONTHLY = "MONTHLY"


class Category(str, Enum):
    HYGIENE = "HYGIENE"
    NUTRITION = "NUTRITION"
    HEALTH = "HEALTH"
    PET = "PET"
    HOUSE = "HOUSE"


class DayOfWeek(int, Enum):
    MONDAY = 0
    TUESDAY = 1
    WEDNESDAY = 2
    THURSDAY = 3
    FRIDAY = 4
    SATURDAY = 5
    SUNDAY = 6


class Routine(BaseObject):
    id: str
    name: str
    description: str

    timing_type: TimingType
    frequency: Frequency
    category: Category
    type: TaskType

    available_time: time | None = None
    start_time: time | None = None
    end_time: time | None = None

    schedule_days: list[DayOfWeek] | None = None
