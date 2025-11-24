from datetime import time, date, datetime
from enum import Enum
from typing import List, Optional

from pydantic import Field
from .base import BaseObject


class RoutineInstanceStatus(str, Enum):
    COMPLETE = "COMPLETE"
    NOT_READY = "NOT_READY"
    READY = "READY"
    PUNTED = "PUNTED"


class TimingType(str, Enum):
    DEADLINE = "DEADLINE"
    FIXED_TIME = "FIXED_TIME"
    TIME_WINDOW = "TIME_WINDOW"
    FLEXIBLE = "FLEXIBLE"


class Frequency(str, Enum):
    DAILY = "DAILY"
    CUSTOM_WEEKLY = "CUSTOM_WEEKLY"


class Category(str, Enum):
    HYGIENE = "hygiene"
    NUTRITION = "nutrition"
    HEALTH = "health"
    PET = "pet"
    CHORE = "chore"


class DayOfWeek(str, Enum):
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"


class Routine(BaseObject):
    id: str
    name: str
    description: str

    timing_type: TimingType = Field(alias="timingType")
    frequency: Frequency
    category: Category

    # Optional time fields; Pydantic will parse "HH:MM" strings into datetime.time
    available_time: Optional[time] = Field(default=None, alias="availableTime")
    start_time: Optional[time] = Field(default=None, alias="startTime")
    end_time: Optional[time] = Field(default=None, alias="endTime")

    schedule_days: Optional[List[DayOfWeek]] = Field(default=None, alias="scheduleDays")


class RoutineInstance(BaseObject):
    routine: Routine
    date: date
    status: RoutineInstanceStatus
    completed_at: datetime | None = Field(default=None, alias="completedAt")

    @property
    def id(self):
        return self.routine.id
