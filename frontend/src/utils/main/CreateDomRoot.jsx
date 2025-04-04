import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../App";
import { ErrorBoundary } from "react-error-boundary";
import FallbackErrorComponent from "../../error/FallbackErrorComponent";

const createDomRoot = () => {
  return ReactDOM.createRoot(document.getElementById("application")).render(
    <ErrorBoundary fallbackRender={FallbackErrorComponent}>
      <App />
    </ErrorBoundary>
  );
};

export default createDomRoot;
