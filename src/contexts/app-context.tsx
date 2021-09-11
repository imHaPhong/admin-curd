/* eslint-disable indent */
/* eslint-disable func-call-spacing */
import React, { ReactNode, createContext, useState } from "react";
import { useNotification } from "./notification/notification";

/**
 * Contains states that need to be shared between all pages.
 *
 * E.g. notification, cart, inventory...
 */
export const AppContext = createContext<{
  notification: ReturnType<typeof useNotification>["notification"];
  setNotification: ReturnType<typeof useNotification>["setNotification"];
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}>({
  notification: {},
  setNotification: () => {},
  setLoading: () => {},
  loading: false,
});

type AppContextProviderProps = {
  children: ReactNode;
  initNotification?: ReturnType<typeof useNotification>["notification"];
};

export function AppContextProvider({ children, initNotification }: AppContextProviderProps) {
  const { notification, setNotification } = useNotification(initNotification);
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        notification,
        setNotification,
        setLoading,
        loading,
      }}
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none ${
          loading ? "" : "hidden"
        }`}
      >
        <p>Loading</p>
      </div>
      {children}
    </AppContext.Provider>
  );
}
