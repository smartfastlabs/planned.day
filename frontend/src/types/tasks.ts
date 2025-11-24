export type TaskTimingType =
  | "FIXED_TIME" // Must be done at a specific time start_time
  | "DEADLINE" // Must be done by a specific time available_time, end_time
  | "FLEXIBLE" // Can be done anytime available_time
  | "TIME_WINDOW"; // Must be done between two times start_time and end_time

export type TaskFrequency = "DAILY" | "WEEKLY" | "MONTHLY" | "CUSTOM_WEEKLY"; // e.g. Mon/Wed/Fri

export type Weekday =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

export type TaskCategory =
  | "chore"
  | "health"
  | "hygiene"
  | "relationship"
  | "nutrition"
  | "pet"
  | "finance"
  | "personal_growth"
  | "work";

export type TaskStatusType =
  | "PENDING" // Waiting to be done
  | "COMPLETED" // Done successfully
  | "SKIPPED" // User chose not to do it
  | "BLOCKED" // Couldn’t do it for a reason (sick, weather, etc.)
  | "MISSED" // Missed deadline or forgot
  | "DEFERRED"; // Moved to a later time/day

export interface TaskStatus {
  type: TaskStatusType;
  createdAt: Date;
}

export interface TaskDefinition {
  id: string; // Unique identifier (UUID or similar)
  name: string;
  description?: string;
  timingType: TaskTimingType;
  frequency: TaskFrequency;
  category: TaskCategory;
  availableTime?: string; // e.g. "07:30"
  startTime?: string; // e.g. "07:30"
  endTime?: string; // e.g. "08:00"
  scheduleDays?: Weekday[]; // for CUSTOM_WEEKLY frequency
}

export interface Task {
  definition: TaskDefinition;
  date: string;
  statuses: TaskStatus[];
}
