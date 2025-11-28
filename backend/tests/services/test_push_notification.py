import equals
import pytest
from dobles import InstanceDouble, expect
from pydantic import AnyHttpUrl
from webpush import WebPushSubscription  # type: ignore

from planned import objects
from planned.services import push_notification


@pytest.mark.vcr
@pytest.mark.asyncio
async def test_send_notification():
    subscription = objects.PushSubscription(
        endpoint="https://example.com",
        p256dh="p256dh",
        auth="auth",
    )
    expect(push_notification.wp).get(
        "test message",
        equals.instance_of(WebPushSubscription).with_attrs(
            endpoint=AnyHttpUrl(subscription.endpoint),
            keys=equals.anything.with_attrs(
                p256dh=subscription.p256dh,
                auth=subscription.auth,
            )
        )
    ).and_return(
        InstanceDouble("webpush.WebPushMessage",
            endpoint=subscription.endpoint,
            encrypted="encrypted",
            headers={"header": "t"}
        )
    )

    await push_notification.push_svc.send_notification(
        subscription,
        "test message",
    )
