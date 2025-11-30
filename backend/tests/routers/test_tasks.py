import pytest

from planned.utils.dates import get_current_date


@pytest.mark.asyncio
async def test_get_todays(test_client, test_date, clear_repos):
    result = test_client.get("/tasks/today")
    assert result.json() == []
