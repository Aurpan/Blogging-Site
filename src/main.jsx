import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { ToastProvider } from "./custom-context/ToastContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);
