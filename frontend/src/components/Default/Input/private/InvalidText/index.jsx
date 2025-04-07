import React, { memo } from "react";
import "./style/InvalidText.css";

const InvalidText = ({ message }) => {
  return (
    <small className="invalid-text-component">
      <i className="pi pi-exclamation-circle"></i> {message}
    </small>
  );
};

export default memo(InvalidText);
