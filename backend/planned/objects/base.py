from typing import Self

import pydantic


class BaseObject(pydantic.BaseModel):
    model_config = pydantic.ConfigDict(
        from_attributes=True,
        populate_by_name=True,
        # frozen=True,
    )

    def clone(self, **kwargs) -> Self:
        return self.model_copy(update=kwargs)

    @property
    def id(self) -> str:
        if hasattr(self, "uuid"):
            return str(self.uuid)
        elif hasattr(self, "platform_id"):
            return f"{self.platform}_{self.platform_id}"
        elif hasattr(self, "email"):
            return self.email

        raise AttributeError("No suitable ID attribute found.")
