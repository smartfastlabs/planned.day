import pytest

from planned import objects
from planned.utils.dates import get_current_date

@pytest.fixture
def today():
    return get_current_date()
