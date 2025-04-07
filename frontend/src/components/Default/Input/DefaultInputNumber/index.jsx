import React, { memo } from "react";
import { InputNumber } from "primereact/inputnumber";
import { FloatLabel } from "primereact/floatlabel";
import InvalidText from "../private/InvalidText";

const DefaultInputNumber = ({
  value,
  label = "",
  min = 1,
  max = 365,
  name = "",
  setValue,
  object = false,
  className = "",
  fullWidth = true,
  invalid = false,
  invalidMessage = "",
}) => {
  return (
    <div className="form-control">
      <FloatLabel>
        <InputNumber
          className={`${fullWidth ? "w-full" : ""}${
            className !== "" ? " " + className : ""
          }`}
          value={value}
          min={min}
          max={max}
          onChange={(e) => {
            if (object) {
              setValue((prevState) => ({ ...prevState, [name]: e.value }));
            } else {
              setValue(e.value);
            }
          }}
          invalid={invalid}
        />
        <label>{label}</label>
      </FloatLabel>
      {invalid && <InvalidText message={invalidMessage} />}
    </div>
  );
};

export default memo(DefaultInputNumber);
