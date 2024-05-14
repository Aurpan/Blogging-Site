/* eslint-disable react/prop-types */
import { createContext, useContext, useRef, useState } from "react";
import { Toast } from "primereact/toast";

// Create a context for the toast
const ToastContext = createContext();

// Create a provider component for the toast
export const ToastProvider = ({ children }) => {
  const [toastPosition, setToastPosition] = useState("bottom-right");
  const toastRef = useRef(null);
  const showToast = ({
    type = "success",
    position = "bottom-right",
    headerText = "Success",
    message = "",
    duration = 4 * 1000,
    sticky = false,
  }) => {
    setToastPosition(position);
    toastRef.current.show({
      severity: type,
      summary: headerText,
      detail: message,
      life: duration,
      sticky: sticky,
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <Toast ref={toastRef} position={toastPosition} />
    </ToastContext.Provider>
  );
};

// Custom hook to use the toast context
export const useToast = () => useContext(ToastContext);
