import { Component, For } from "solid-js";
import Card from "./card";
import {
  faCoffee,
  faUser,
  faChartBar,
  faCogs,
  faBroom,
  faFaceSmileWink,
} from "@fortawesome/free-solid-svg-icons";

const cards = [
  { id: 1, title: "Nutrition", icon: faCoffee },
  { id: 2, title: "Exercise", icon: faUser },
  { id: 3, title: "Work", icon: faChartBar },
  { id: 4, title: "Fun", icon: faFaceSmileWink },
  { id: 4, title: "Chores", icon: faBroom },
  { id: 4, title: "Settings", icon: faCogs },
];

const CardContainer: Component = () => (
  <div class="my-auto">
    <div class="grid grid-cols-2 gap-y-20 gap-x-10">
      <For each={cards}>
        {(card) => (
          <div class="flex items-center justify-center">
            <Card title={card.title} icon={card.icon} />
          </div>
        )}
      </For>
    </div>
  </div>
);

export default CardContainer;
