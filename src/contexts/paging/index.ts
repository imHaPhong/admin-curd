import { ReactNode, useState } from "react";

export type Notification = {
  children?: ReactNode;
};

export function usePagio(defaultNotification?: Notification) {
  const [notification, setNotification] = useState(defaultNotification);
  return { notification, setNotification };
}
