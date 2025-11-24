import os
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    API_PREFIX: str = ""
    TIMEZONE: str = "America/Chicago"
    DEBUG: bool = False

    VAPID_SECRET_KEY: str = ""
    VAPID_PUBLIC_KEY: str = ""
    ENVIRONMENT: str = "development"

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
