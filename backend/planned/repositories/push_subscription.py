from .base import BaseRepository
from planned.objects import PushSubscription


class PushSubscriptionRepository(BaseRepository[PushSubscription]):
    Object = PushSubscription
    _prefix = "push_subscriptions"
