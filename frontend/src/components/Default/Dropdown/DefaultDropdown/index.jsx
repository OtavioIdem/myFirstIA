import React, { memo } from "react";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import InvalidText from "../../Input/private/InvalidText";

const DefaultDropdown = ({
  value,
  label = "",
  name = "",
  setValue,
  object = false,
  options = [],
  filter = false,
  virtualScrollerOptions = { itemSize: 38 },
  optionValue = "id",
  optionLabel = "label",
  className = "",
  fullWidth = true,
  invalid = false,
  invalidMessage = "",
}) => {
  return (
    <div className="form-control">
      <FloatLabel>
        <Dropdown
          className={`${fullWidth ? "w-full" : ""}${
            className !== "" ? " " + className : ""
          }`}
          filter={filter}
          options={options}
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
          emptyMessage="Nenhum item disp."
          emptyFilterMessage="Item não encontrado."
          virtualScrollerOptions={
            options.length >= 50 ? virtualScrollerOptions : null
          }
          optionValue={optionValue}
          optionLabel={optionLabel}
          invalid={invalid}
        />
        <label>{label}</label>
        {invalid && <InvalidText message={invalidMessage} />}
      </FloatLabel>
    </div>
  );
};

export default memo(DefaultDropdown);
