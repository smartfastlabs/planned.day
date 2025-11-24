import { FontAwesomeIcon } from "solid-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const SettingsButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      class="fixed bottom-6 right-6 z-50 bg-gray-600 text-white p-4 rounded-full shadow-lg 
             hover:bg-gray-700 active:scale-95 transition-transform duration-150 ease-in-out
             print:hidden"
      aria-label="Settings"
    >
      <FontAwesomeIcon icon={faGear} class="w-6 h-6" />
    </button>
  );
};

export default SettingsButton;
