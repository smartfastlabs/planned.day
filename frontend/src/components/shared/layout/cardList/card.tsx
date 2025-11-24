import { Component, For } from "solid-js";
import { FontAwesomeIcon } from "solid-fontawesome";

const Card: Component<{ title: string; icon: any }> = (props) => (
  <div class="bg-white w-full shadow text-gray-800 text-4xl rounded-2xl flex flex-col items-center justify-center aspect-square p-10 hover:shadow-lg transition-shadow">
    <FontAwesomeIcon icon={props.icon} />
    <span class="text-sm mt-2">{props.title}</span>
  </div>
);

export default Card;
