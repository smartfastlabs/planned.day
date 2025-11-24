from .base import BaseObject
from google.oauth2.credentials import Credentials
from datetime import datetime, timezone
from pydantic import Field
from typing import Optional
from uuid import UUID
import uuid


class AuthToken(BaseObject):
    platform: str
    token: str
    refresh_token: Optional[str] = Field(default=None, alias="refreshToken")
    token_uri: Optional[str] = Field(default=None, alias="tokenUri")
    client_id: Optional[str] = Field(default=None, alias="clientId")
    client_secret: Optional[str] = Field(default=None, alias="clientSecret")
    scopes: Optional[list] = Field(default=None, alias="scopes")
    expires_at: Optional[datetime] = Field(default=None, alias="expiresAt")
    uuid: UUID = Field(default_factory=uuid.uuid4)
    created_at: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc), alias="createdAt"
    )

    def google_credentials(self):
        """
        Returns the credentials for Google API.
        """

        return Credentials(
            token=self.token,
            refresh_token=self.refresh_token,
            token_uri=self.token_uri,
            client_id=self.client_id,
            client_secret=self.client_secret,
            scopes=self.scopes,
        )
