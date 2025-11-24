from typing import Optional
from gcsa.event import Event as GoogleEvent
from .base import BaseObject
from datetime import datetime, timezone
from pydantic import Field
import uuid
from uuid import UUID


class Event(BaseObject):
    name: str
    calendar_id: str = Field(alias="calendarId")
    platform_id: str = Field(alias="platformId")
    platform: str
    status: str
    starts_at: datetime | None = Field(default=None, alias="startsAt")
    ends_at: datetime | None = Field(default=None, alias="endsAt")
    uuid: UUID = Field(default_factory=uuid.uuid4)
    created_at: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc), alias="createdAt"
    )
    updated_at: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc), alias="updatedAt"
    )

    @classmethod
    def from_google(cls, calendar_id: str, google_event: GoogleEvent) -> "Event":
        event = cls(
            calendar_id=calendar_id,
            status=google_event.other.get("status", "NA"),
            name=google_event.summary,
            starts_at=google_event.start.astimezone(timezone.utc).replace(
                tzinfo=None,
            )
            if isinstance(google_event.start, datetime)
            else google_event.start,
            ends_at=google_event.end.astimezone(timezone.utc).replace(
                tzinfo=None,
            )
            if isinstance(google_event.end, datetime)
            else google_event.end,
            platform_id=google_event.id or "NA",
            platform="google",
            created_at=google_event.created.astimezone(timezone.utc).replace(
                tzinfo=None
            ),
            updated_at=google_event.updated.astimezone(timezone.utc).replace(
                tzinfo=None
            ),
        )
        return event
