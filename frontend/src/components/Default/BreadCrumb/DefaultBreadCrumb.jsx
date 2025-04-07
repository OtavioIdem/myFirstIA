import React, { memo } from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import navigateAnchor from "../../../utils/generic/navigateAnchor";
import "./style/DefaultBreadCrumb.css";

const DefaultBreadCrumb = ({ caminhoPagina = [] }) => {
  const formatarItensPadraoBreadCrump = () => {
    let itens = [];

    caminhoPagina.map((item) => {
      itens.push({
        label: item,
      });
    });

    return itens;
  };

  const itens = formatarItensPadraoBreadCrump();

  const home = {
    icon: "pi pi-globe",
    url: "/dashboard",
    command: (e) => {
      navigateAnchor(e.originalEvent, "/dashboard");
    },
  };

  return (
    <div className="card grid breadcrumb-item">
      <BreadCrumb
        model={itens}
        home={home}
        style={{ boxShadow: "rgba(0, 0, 0, 0.5) 0px 0px 2px", border: "none" }}
      />
    </div>
  );
};

export default memo(DefaultBreadCrumb);
