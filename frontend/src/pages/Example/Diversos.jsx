import React, { useEffect, useState } from "react";
import DefaultInputText from "../../components/Default/Input/DefaultInputText";
import DefaultCard from "../../components/Default/DefaultCard";
import DefaultInputTextArea from "../../components/Default/Input/DefaultInputTextArea";
import alterarTitleDom from "../../utils/generic/alterarTitleDom";
import DefaultDropdown from "../../components/Default/Dropdown/DefaultDropdown";
import OptionsExample from "./data/OptionsExample";
import DefaultInputCheckbox from "../../components/Default/Input/DefaultInputCheckbox";
import DefaultInputNumber from "../../components/Default/Input/DefaultInputNumber";
import DefaultButton from "../../components/Default/Button/DefaultButton";
import DefaultDialog from "../../components/Default/DefaultDialog";
import useCurrentPage from "../../utils/sidebar/useCurrentPage";
import idPaginas from "../../data/idPaginas";

const Diversos = () => {
  const { setCurrentPage } = useCurrentPage();

  useEffect(() => {
    setCurrentPage(idPaginas.diversos);
    alterarTitleDom("Diversos");
  }, []);

  const [defaultInputText, setDefaultInputText] = useState("");
  const [defaultInputText2, setDefaultInputText2] = useState("");

  const [defaultInputTextArea, setDefaultInputTextArea] = useState("");

  const [defaultDropdown, setDefaultDropdown] = useState("");
  const [defaultDropdown2, setDefaultDropdown2] = useState("");

  const [defaultCheckbox, setDefaultCheckbox] = useState(true);

  const [defaultInputNumber, setDefaultInputNumber] = useState(null);

  const [options] = useState(OptionsExample);

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <DefaultCard
      title="Diversos"
      caminhoPagina={["Exemplos", "Padrão", "Formulário", "Diversos"]}
    >
      <DefaultDialog
        title="Dialog Title"
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      >
        <p className="mt-0">Este é o dialog padrão.</p>
      </DefaultDialog>
      <div className="card-form">
        <div
          className="col-input"
          style={{
            width: "250px",
          }}
        >
          <DefaultInputText
            label="Default InputText"
            value={defaultInputText}
            setValue={setDefaultInputText}
          />
        </div>
        <div
          className="col-input"
          style={{
            width: "250px",
          }}
        >
          <DefaultInputText
            label="Default InputText Invalid"
            value={defaultInputText2}
            setValue={setDefaultInputText2}
            invalid
            invalidMessage="Invalid text"
          />
        </div>
        <div className="col-input">
          <DefaultInputCheckbox
            value={defaultCheckbox}
            setValue={setDefaultCheckbox}
            label={"Checkbox"}
          />
        </div>
      </div>
      <div className="card-form">
        <div className="col-input" style={{ width: "325px" }}>
          <DefaultDropdown
            value={defaultDropdown}
            setValue={setDefaultDropdown}
            label="Default Dropdown"
            optionValue="id"
            optionLabel="label"
            options={options}
          />
        </div>
        <div className="col-input" style={{ width: "325px" }}>
          <DefaultDropdown
            filter
            value={defaultDropdown2}
            setValue={setDefaultDropdown2}
            label="Default Dropdown Filter"
            optionValue="id"
            optionLabel="label"
            options={options}
          />
        </div>
      </div>
      <div className="card-form">
        <div className="col-input" style={{ width: "650px" }}>
          <DefaultInputNumber
            label={"Default InputNumber"}
            value={defaultInputNumber}
            setValue={setDefaultInputNumber}
          />
        </div>
      </div>
      <div className="card-form">
        <div className="col-input" style={{ width: "650px" }}>
          <DefaultInputTextArea
            label="Default InputTextArea"
            value={defaultInputTextArea}
            setValue={setDefaultInputTextArea}
            name={"defaultInputTextArea"}
            rows={8}
          />
        </div>
      </div>
      <div className="card-form">
        <div className="col-btn" style={{ width: "216.7px" }}>
          <DefaultButton icon="pi pi-plus" label="Default" />
        </div>
        <div className="col-btn" style={{ width: "216.7px" }}>
          <DefaultButton icon="pi pi-plus" severity="success" label="Success" />
        </div>
        <div className="col-btn" style={{ width: "216.7px" }}>
          <DefaultButton icon="pi pi-plus" severity="danger" label="Danger" />
        </div>
      </div>
      <div className="card-form">
        <div className="col-btn" style={{ width: "216.7px" }}>
          <DefaultButton icon="pi pi-plus" severity="primary" label="Primary" />
        </div>
        <div className="col-btn" style={{ width: "216.7px" }}>
          <DefaultButton icon="pi pi-plus" severity="warning" label="Warning" />
        </div>
        <div className="col-btn" style={{ width: "216.7px" }}>
          <DefaultButton
            icon="pi pi-plus"
            severity="secondary"
            label="Secondary"
          />
        </div>
      </div>
      <div className="card-form">
        <div className="col-btn" style={{ width: "216.7px" }}>
          <DefaultButton icon="pi pi-plus" severity="help" label="Help" />
        </div>
        <div className="col-btn" style={{ width: "216.7px" }}>
          <DefaultButton icon="pi pi-plus" severity="info" label="Info" />
        </div>
      </div>
      <div className="card-form">
        <div className="col-btn" style={{ width: "250px" }}>
          <DefaultButton
            icon="pi pi-stop"
            label="Abrir dialog"
            onClick={() => setOpenDialog(true)}
          />
        </div>
      </div>
    </DefaultCard>
  );
};

export default Diversos;
