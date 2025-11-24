import Page from "~/components/shared/layout/page";
import { Component } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { useTaskManager } from "~/providers/tasks";

const TaskList = clientOnly(() => import("~/components/tasks/list"));

export const Index: Component = () => {
  const { tasks } = useTaskManager();
  return (
    <div class="min-h-screen w-full flex flex-col justify-center typography-body">
      <div class="w-full h-full mx-auto md:px-0 max-w-[960px] mt-4 flex-1 flex flex-col">
        {props.children}
      </div>
    </div>
  );
};

export default Index;
