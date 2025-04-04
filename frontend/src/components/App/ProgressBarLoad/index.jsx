import React, { memo } from "react";
import { ProgressBar } from "primereact/progressbar";

const ProgressBarLoad = ({ height = "6px" }) => {
  return (
    <div className="card">
      <ProgressBar
        mode="indeterminate"
        style={{ height: height }}
      ></ProgressBar>
    </div>
  );
};

export default memo(ProgressBarLoad);
