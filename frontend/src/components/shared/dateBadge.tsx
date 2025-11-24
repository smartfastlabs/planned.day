// DateBadge.tsx
import type { Component } from "solid-js";

type DateBadgeProps = {
  value: Date; // the Date to display
  locale?: string; // optional e.g. "en-GB", "de-DE"
};

const DateBadge: Component<DateBadgeProps> = (props) => {
  const locale = () => props.locale ?? "en-US";

  // Format like: "Oct 12, 2025" (compact) and "14:05" (24h HH:mm)
  const dateText = () =>
    new Intl.DateTimeFormat(locale(), {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(props.value);

  const timeText = () =>
    new Intl.DateTimeFormat(locale(), {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(props.value);

  return (
    <div
      class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm text-gray-800 shadow-sm"
      role="group"
      aria-label="Date and time"
    >
      <span>{dateText()}</span>
      <span aria-hidden="true">•</span>
      <time dateTime={props.value.toISOString()}>{timeText()}</time>
    </div>
  );
};

export default DateBadge;
