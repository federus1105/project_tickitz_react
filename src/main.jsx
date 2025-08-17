import React from "react";
import { StrictMode } from "react";
import "./index.css";
import Router from "./Router.jsx";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, reduxStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={reduxStore}>
    <PersistGate loading={null} persistor={persistor}>
      <Toaster richColors position="top-center" />
      <Router />
    </PersistGate>
  </Provider>
  // </StrictMode>
);
