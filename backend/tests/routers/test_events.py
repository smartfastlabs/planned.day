import pytest


@pytest.mark.asyncio
async def test_get_today(test_client):
    result = test_client.get('/events/today')
    breakpoint()