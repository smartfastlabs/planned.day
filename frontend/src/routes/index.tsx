import Page from "~/components/shared/layout/page";
import { Component } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { useTaskManager } from "~/providers/tasks";

const TaskList = clientOnly(() => import("~/components/tasks/list"));

export const Index: Component = () => {
  const { tasks } = useTaskManager();
  return (
    <Page>
      <TaskList startTime="05:30" endTime="23:00" tasks={tasks} />
    </Page>
  );
};

export default Index;
