import {
  createSignal,
  createContext,
  createResource,
  useContext,
  onMount,
} from "solid-js";
import TaskService from "~/services/tasks";
import { Task, TaskStatus, TaskStatusType } from "~/types/tasks";

const TaskContext = createContext();

export function TaskProvider(props) {
  const [tasks, taskManager] = createResource<Task[]>(() => []);

  onMount(async () => {
    taskManager.mutate(TaskService.getTasksForDate());
  });

  const updateTask = async (input: Task) => {
    taskManager.mutate((items) =>
      items.map((i) =>
        i.definition.id !== input.definition.id ? i : { ...i, ...input }
      )
    );
    return input;
  };

  const setTaskStatus = async (task: Task, status: TaskStatusType) => {
    await updateTask(TaskService.setTaskStatus(task, status));
  };

  const value = {
    tasks,
    updateTask,
    setTaskStatus,
  };

  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
}

export function useTaskManager() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskManager must be used within a TaskProvider");
  }
  return context;
}
