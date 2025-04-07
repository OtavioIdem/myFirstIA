import React, { memo } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import DefaultButtonFilter from "../DefaultButtonFilter";
import "./style/DefaultInputTextFilter.css";

const DefaultInputTextFilter = ({
  value,
  label = "",
  name = "",
  setValue,
  object = false,
  className = "",
  fullWidth = true,
  disabled = false,
  maxLength = null,
  onChange,
  defaultValue,
  id = "",
}) => {
  return (
    <div className="form-control">
      <FloatLabel className="float-label-filter-btn">
        <InputText
          className={`${fullWidth ? "w-full" : ""}${
            className !== "" ? " " + className : ""
          }`}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          id={id}
        />
        {value !== "" && (
          <DefaultButtonFilter
            onClick={() => {
              const input = document.getElementById(id);
              if (input.hasOwnProperty("value")) {
                setValue("");
                input.value = "";
              }
            }}
          />
        )}
        <label>{label}</label>
      </FloatLabel>
    </div>
  );
};

export default memo(DefaultInputTextFilter);
