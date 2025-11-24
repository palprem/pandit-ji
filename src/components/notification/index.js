import { toast } from "react-toastify";

export const errorNotification = (msg = '') => {
  toast.error(msg);
};

export const warningNotification = (msg = '') => {
  toast.warning(msg);
};

export const successNotification = (msg = '') => {
  toast.success(msg);
};