import asyncio

import pytest
from dobles import expect
from planned.services import calendar_svc


@pytest.mark.asyncio
async def test_run():
    expect(calendar_svc).sync_all().once()

    task = asyncio.create_task(calendar_svc.run())
    await asyncio.sleep(0.1)

    calendar_svc.stop()
    await task
