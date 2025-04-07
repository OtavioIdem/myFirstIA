import React, { memo } from "react";
import { Button } from "primereact/button";

const DefaultCancelButton = ({
  label = "Cancelar",
  icon = "pi pi-times",
  style = null,
  className = "",
  onClick,
  disabled = false,
  fullWidth = true,
}) => {
  return (
    <div className="form-control">
      <Button
        label={label}
        icon={icon}
        className={`cancel-btn btn-grid${
          className !== "" ? " " + className : ""
        }${fullWidth ? " w-full" : ""}`}
        severity="secondary"
        outlined
        onClick={onClick}
        disabled={disabled}
        style={style}
      />
    </div>
  );
};

export default memo(DefaultCancelButton);
