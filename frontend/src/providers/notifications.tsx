import { createContext, useContext, createSignal, For } from "solid-js";

// Create a global signal that can be imported anywhere
export const [notifications, setNotifications] = createSignal([]);

// Global notification functions that can be imported anywhere
export const globalNotifications = {
  add: (message, type = "error", options = {}) => {
    const { duration = 5000, persistent = false } = options;
    const id = crypto.randomUUID();

    const notification = {
      id,
      message,
      type,
      timestamp: Date.now(),
      persistent,
    };

    setNotifications((prev) => [...prev, notification]);

    // Auto-remove after duration
    if (duration > 0 && !persistent) {
      setTimeout(() => {
        globalNotifications.remove(id);
      }, duration);
    }

    return id;
  },

  remove: (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  },

  clear: () => {
    setNotifications([]);
  },

  addError: (message, options) =>
    globalNotifications.add(message, "error", options),
  addSuccess: (message, options) =>
    globalNotifications.add(message, "success", options),
  addWarning: (message, options) =>
    globalNotifications.add(message, "warning", options),
  addInfo: (message, options) =>
    globalNotifications.add(message, "info", options),
};

const NotificationContext = createContext();

export function NotificationProvider(props) {
  // The provider now just wraps the global signal
  const contextValue = {
    notifications,
    ...globalNotifications,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within NotificationProvider"
    );
  }
  return context;
}

export function NotificationContainer() {
  // Use the global signal directly
  const remove = globalNotifications.remove;

  return (
    <div class="notification-container fixed top-4 right-4 z-50 space-y-2">
      <For each={notifications()}>
        {(notification) => (
          <div
            class={`notification p-4 rounded-lg shadow-lg max-w-sm transition-all duration-300 ${
              notification.type === "error"
                ? "bg-red-500 text-white"
                : notification.type === "success"
                ? "bg-green-500 text-white"
                : notification.type === "warning"
                ? "bg-yellow-500 text-black"
                : "bg-blue-500 text-white"
            }`}
          >
            <div class="flex items-center justify-between">
              <p class="flex-1">{notification.message}</p>
              <button
                onClick={() => remove(notification.id)}
                class="ml-4 text-lg font-bold opacity-70 hover:opacity-100"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </For>
    </div>
  );
}
