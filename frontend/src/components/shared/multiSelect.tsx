import { createSignal, For, Show } from "solid-js";
import { Icon } from "solid-heroicons";

interface Item {
  name: string;
  icon: string; // Font Awesome class, e.g. "fa-solid fa-user"
  slug: string;
}

interface MultiSelectProps {
  title: string;
  items: Item[];
  onClose: () => void;
  onClick: (slug: string, value: boolean) => void;
}

export default function MultiSelect(props: MultiSelectProps) {
  const [selected, setSelected] = createSignal<Set<string>>(new Set());

  const toggleSelect = (slug: string) => {
    const next = new Set(selected());
    if (next.has(slug)) {
      next.delete(slug);
      props.onClick(slug, false);
    } else {
      next.add(slug);
      props.onClick(slug, true);
    }
    setSelected(next);
  };

  return (
    <div class="grid grid-cols-2 gap-4">
      <For each={props.items}>
        {(item) => {
          const active = () => selected().has(item.slug);
          return (
            <button
              class={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all 
                    ${
                      active()
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                    }`}
              onClick={() => toggleSelect(item.slug)}
            >
              <Icon path={item.icon} class={`w-10 h-10 m-2`} />
              <span class="text-sm font-medium">{item.name}</span>
            </button>
          );
        }}
      </For>
    </div>
  );
}
