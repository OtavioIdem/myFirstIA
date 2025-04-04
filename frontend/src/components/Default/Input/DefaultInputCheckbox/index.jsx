import React, { memo } from "react";
import { Checkbox } from "primereact/checkbox";
import InvalidText from "../private/InvalidText";

const DefaultInputCheckbox = ({
  value,
  label = "",
  name = "",
  setValue,
  object = false,
  className = "",
  invalid = false,
  invalidMessage = "",
}) => {
  return (
    <>
      <div className="flex align-items-center h-100">
        <Checkbox
          inputId={`${label}#`}
          onChange={(e) => {
            if (object) {
              setValue((prevState) => ({ ...prevState, [name]: e.checked }));
            } else {
              setValue(e.checked);
            }
          }}
          checked={value}
          invalid={invalid}
        />
        <label
          htmlFor={`${label}#`}
          className={`ml-2 cursor-pointer${
            className !== "" ? " " + className : ""
          }`}
        >
          {label}
        </label>
      </div>
      {invalid && <InvalidText message={invalidMessage} />}
    </>
  );
};

export default memo(DefaultInputCheckbox);
