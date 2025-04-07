import React, { memo } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import InvalidText from "../private/InvalidText";

const DefaultInputTextArea = ({
  value,
  label = "",
  name = "",
  setValue,
  object = false,
  rows = 6,
  invalid = false,
  invalidMessage = "",
  className = "",
  fullWidth = true,
}) => {
  return (
    <div className="form-control">
      <FloatLabel>
        <InputTextarea
          className={`${className !== "" ? " " + className : ""}${
            fullWidth ? " w-full" : ""
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
          rows={rows}
          invalid={invalid}
        />
        <label>{label}</label>
      </FloatLabel>
      {invalid && <InvalidText message={invalidMessage} />}
    </div>
  );
};

export default memo(DefaultInputTextArea);
