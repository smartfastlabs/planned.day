from planned.objects import Task

from .base import BaseRepository


class TaskRepository(BaseRepository[Task]):
    Object = Task
    _prefix = "tasks"
