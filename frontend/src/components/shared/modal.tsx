import { createEffect, onCleanup, JSX } from "solid-js";
import { Icon } from "solid-heroicons";
import { xMark } from "solid-heroicons/outline";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export default function Modal(props: ModalProps) {
  // Lock body scroll when modal is open
  createEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = props.isOpen ? "hidden" : original;

    onCleanup(() => {
      document.body.style.overflow = original;
    });
  });

  return (
    <>
      {props.isOpen && (
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={props.onClose}
        >
          {/* Modal Container */}
          <div
            class="relative bg-white rounded-2xl w-full mx-10 my-10 p-10 shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              class="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={props.onClose}
              aria-label="Close"
            >
              <Icon path={xMark} class="w-7 h-7 m-2" />
            </button>

            {/* Content */}
            <div class="mt-6">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
}
