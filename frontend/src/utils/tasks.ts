import { getTime } from "./dates";

export function groupTasks(tasks: Any[]) {
  // remove all items with availableTime in the future
  const result = {
    punted: [] as Any[],
    pending: [] as Any[],
    missed: [] as Any[],
    completed: [] as Any[],
  };

  for (const task of tasks) {
    const startTime: Date | null = task.definition.startTime
      ? getTime(task.date, task.definition.startTime)
      : null;

    const endTime: Date | null = task.definition.endTime
      ? getTime(task.date, task.definition.endTime)
      : null;

    const availableTime: Date | null = task.definition.availableTime
      ? getTime(task.date, task.definition.availableTime)
      : null;

    const taskStatus: string | null = task.statuses.length
      ? task.statuses[task.statuses.length - 1].type
      : null;

    switch (task.definition.timingType) {
      case "FIXED_TIME":
        if (startTime && startTime < new Date()) {
          result.missed.push(task);
        } else {
          result.pending.push(task);
        }
        break;
      case "DEADLINE":
        if (endTime && endTime < new Date()) {
          result.missed.push(task);
        } else if (!availableTime || availableTime < new Date()) {
          result.pending.push(task);
        }
        break;
      case "TIME_WINDOW":
        break;
      case "FLEXIBLE":
        if (!availableTime || availableTime < new Date()) {
          result.pending.push(task);
        }
        break;
    }
  }

  return result;
}
