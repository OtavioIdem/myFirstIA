import React from "react";
import ErrorClient from "./ErrorClient";

const FallbackErrorComponent = ({ error, resetErrorBoundary }) => {
  return <ErrorClient error={error} resetErrorBoundary={resetErrorBoundary} />;
};

export default FallbackErrorComponent;
