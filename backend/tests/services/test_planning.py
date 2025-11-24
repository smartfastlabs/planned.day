import pytest

from planned.services import planning_svc


@pytest.mark.asyncio
async def test_schedule_today(today):
    result = await planning_svc.schedule_day(today)

    breakpoint()