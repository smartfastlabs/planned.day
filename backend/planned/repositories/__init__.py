from .push_subscription import PushSubscriptionRepository
from .auth_token import AuthTokenRepository
from .calendar import CalendarRepository
from .event import EventRepository
from .routine import RoutineRepository


auth_token_repo = AuthTokenRepository()
calendar_repo = CalendarRepository()
event_repo = EventRepository()
push_subscription_repo = PushSubscriptionRepository()
routine_repo = RoutineRepository()
