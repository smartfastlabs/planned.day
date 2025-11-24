from .base import BaseObject
from datetime import datetime, timezone
from pydantic import Field
from uuid import UUID
import uuid


class PushSubscription(BaseObject):
    endpoint: str
    p256dh: str
    auth: str
    uuid: UUID = Field(default_factory=uuid.uuid4)
    created_at: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc),
        alias="createdAt",
    )
