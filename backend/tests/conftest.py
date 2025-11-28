import datetime
import shutil
import tempfile

import pytest
from fastapi.testclient import TestClient
from freezegun import freeze_time

from planned import objects, settings
from planned.app import app
from planned.utils.dates import get_current_date, get_current_datetime


@pytest.fixture
def today():
    return get_current_date()


@pytest.fixture
def test_date():
    with freeze_time("2025-11-27 00:00:00-6:00"):
        yield datetime.date(2025, 11, 27)


client = TestClient(app)


@pytest.fixture
def test_client():
    return client


@pytest.fixture
def clear_repos():
    old_value = settings.DATA_PATH
    with tempfile.TemporaryDirectory() as temp_dir:
        # Recursively copy *contents* of ./tests/data into temp_dir
        shutil.copytree(
            "./tests/data",
            temp_dir,
            dirs_exist_ok=True,  # allows temp_dir to already exist
        )

        try:
            settings.DATA_PATH = temp_dir
            yield
        finally:
            settings.DATA_PATH = old_value


@pytest.fixture
def test_event(test_date):
    return objects.Event(
        name="Test Event",
        calendar_id="test-calendar",
        platform_id="test-id",
        platform="testing",
        status="status",
        starts_at=test_date + datetime.timedelta(days=2),
    )
