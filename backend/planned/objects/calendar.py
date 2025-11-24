from .base import BaseObject
from pydantic import Field
from uuid import UUID
from datetime import datetime
from typing import Optional


class Calendar(BaseObject):
    name: str
    auth_token_uuid: UUID = Field(alias="authTokenUuid")
    platform_id: str = Field(alias="platformId")
    platform: str
    last_sync_at: Optional[datetime] = Field(default=None, alias="lastSyncAt")
