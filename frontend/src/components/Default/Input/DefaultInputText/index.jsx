import React, { memo } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import InvalidText from "../private/InvalidText";

const DefaultInputText = ({
  value,
  label = "",
  name = "",
  setValue,
  object = false,
  className = "",
  fullWidth = true,
  invalid = false,
  invalidMessage = "",
  disabled = false
}) => {
  return (
    <div className="form-control">
      <FloatLabel>
        <InputText
          className={`${fullWidth ? "w-full" : ""}${
            className !== "" ? " " + className : ""
          }`}
          value={value}
          onChange={(e) => {
            if (object) {
              setValue((prevState) => ({
                ...prevState,
                [name]: e.target.value,
              }));
            } else {
              setValue(e.target.value);
            }
          }}
          invalid={invalid}
          disabled={disabled}
        />
        <label>{label}</label>
      </FloatLabel>
      {invalid && <InvalidText message={invalidMessage} />}
    </div>
  );
};

export default memo(DefaultInputText);
