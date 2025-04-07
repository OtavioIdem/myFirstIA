import React, { memo } from "react";
import "./style/DefaultButtonFilter.css";

const DefaultButtonFilter = ({ onClick }) => {
  return (
    <button className="default-filter-btn" onClick={onClick}>
      <i className="pi pi-times"></i>
    </button>
  );
};

export default memo(DefaultButtonFilter);
