import MultiSelect from "~/components/shared/multiSelect";
import Modal from "~/components/shared/modal";
import { createSignal } from "solid-js";
import { clock } from "solid-heroicons/outline";

export default function Demo() {
  const [open, setOpen] = createSignal(true);

  const items = [
    { name: "Hygiene", icon: clock, slug: "music" },
    { name: "Nutrition", icon: clock, slug: "photos" },
    { name: "Chores", icon: clock, slug: "chat" },
    { name: "Self Care", icon: clock, slug: "chat" },
  ];

  const handleSelect = (slug: string, value: boolean) => {
    console.log(slug, value ? "selected" : "deselected");
  };

  return (
    <Modal isOpen={open()} onClose={() => setOpen(false)}>
      <MultiSelect
        title="Select Features"
        items={items}
        onClose={() => setOpen(false)}
        onClick={handleSelect}
      />
    </Modal>
  );
}
