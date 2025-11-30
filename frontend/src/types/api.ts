/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

export type TaskStatus = "COMPLETE" | "NOT_READY" | "READY" | "PUNTED";
export type TaskType = "MEAL" | "EVENT" | "CHORE" | "ERRAND" | "ACTIVITY";
export type TimingType = "DEADLINE" | "FIXED_TIME" | "TIME_WINDOW" | "FLEXIBLE";
export type Category = "HYGIENE" | "NUTRITION" | "HEALTH" | "PET" | "HOUSE";
export type Frequency = "DAILY" | "CUSTOM_WEEKLY" | "ONCE" | "YEARLY" | "MONTHLY";
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface AuthToken {
  id?: string;
  platform: string;
  token: string;
  refresh_token?: string | null;
  token_uri?: string | null;
  client_id?: string | null;
  client_secret?: string | null;
  scopes?: unknown[] | null;
  expires_at?: string | null;
  uuid?: string;
  created_at?: string;
}
export interface BaseObject {
  id?: string;
}
export interface Calendar {
  id?: string;
  name: string;
  auth_token_id: string;
  platform_id: string;
  platform: string;
  last_sync_at?: string | null;
}
export interface Day {
  id?: string;
  date: string;
  events: Event[];
  tasks: Task[];
}
export interface Event {
  id?: string;
  name: string;
  calendar_id: string;
  platform_id: string;
  platform: string;
  status: string;
  starts_at: string;
  ends_at?: string | null;
  created_at?: string;
  updated_at?: string;
  date: string;
}
export interface Task {
  id?: string;
  date: string;
  status: TaskStatus;
  task_definition: TaskDefinition;
  completed_at?: string | null;
  schedule?: TaskSchedule | null;
  routine_id?: string | null;
}
export interface TaskDefinition {
  id: string;
  name: string;
  description: string;
  type: TaskType;
}
export interface TaskSchedule {
  available_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  timing_type: TimingType;
}
export interface PushSubscription {
  id?: string;
  endpoint: string;
  p256dh: string;
  auth: string;
  uuid?: string;
  createdAt?: string;
}
export interface Routine {
  id: string;
  name: string;
  task_definition_id: string;
  category: Category;
  routine_schedule: RoutineSchedule;
  description?: string;
  task_schedule?: TaskSchedule | null;
}
export interface RoutineSchedule {
  frequency: Frequency;
  weekdays?: DayOfWeek[] | null;
}
