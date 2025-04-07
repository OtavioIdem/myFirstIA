import React, { memo } from "react";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";

const DefaultButton = ({
  label,
  icon = "",
  style = null,
  className = "",
  severity = "",
  outlined = false,
  onClick,
  disabled = false,
  data_pr_tooltip = "",
  data_pr_position = "",
  data_pr_showdelay = null,
  data_pr_mousetrack = null,
  fullWidth = true,
}) => {
  return (
    <div className="form-control">
      <Tooltip target=".default-btn" showDelay={500} hideDelay={0} />
      <Button
        label={label}
        icon={icon}
        className={`${severity !== "" ? "" : "default-btn"}${
          className !== "" ? " " + className : ""
        } btn-grid${fullWidth ? " w-full" : ""}`}
        severity={severity}
        outlined={outlined}
        onClick={onClick}
        disabled={disabled}
        data-pr-tooltip={data_pr_tooltip}
        data-pr-position={data_pr_position}
        data-pr-showdelay={data_pr_showdelay}
        data-pr-mousetrack={data_pr_mousetrack}
        style={style}
      />
    </div>
  );
};

export default memo(DefaultButton);
