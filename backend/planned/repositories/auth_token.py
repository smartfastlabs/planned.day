from .base import BaseRepository
from planned.objects import AuthToken


class AuthTokenRepository(BaseRepository[AuthToken]):
    Object = AuthToken
    _prefix = "auth_tokens"
