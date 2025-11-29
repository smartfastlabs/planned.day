import uuid
from typing import Any, Self

import pydantic


class BaseObject(pydantic.BaseModel):
    id: str = pydantic.Field(default_factory=lambda: str(uuid.uuid4()))
    model_config = pydantic.ConfigDict(
        from_attributes=True,
        populate_by_name=True,
        # frozen=True,
    )

    def clone(self, **kwargs: dict[str, Any]) -> Self:
        return self.model_copy(update=kwargs)
