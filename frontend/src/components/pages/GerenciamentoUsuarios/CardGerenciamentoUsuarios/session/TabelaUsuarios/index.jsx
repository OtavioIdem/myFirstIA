import React, { memo, useState, useEffect } from "react";
import DefaultTable from "../../../../../Default/DefaultTable";
import { Column } from "primereact/column";
import UsuariosExemploData from "../../data/UsuariosExemploData";
import isoToBrDateTime from "../../../../../../utils/date/isoToBrDateTime";

const TabelaUsuarios = () => {
  const [listaUsuarios, setListaUsuarios] = useState(null);

  useEffect(() => {
    setListaUsuarios(UsuariosExemploData);
  }, []);

  return (
    <div className="card">
      <DefaultTable value={listaUsuarios} filter>
        <Column field="usuario" header="Usuário"></Column>
        <Column field="email" header="E-mail"></Column>
        <Column
          header="Admin"
          body={(data) => {
            return (
              <span
                className={data.admin === "Y" ? "text-success" : "text-danger"}
              >
                <b>{data.admin === "Y" ? "Sim" : "Não"}</b>
              </span>
            );
          }}
        ></Column>
        <Column
          header="Manager"
          body={(data) => {
            return (
              <span
                className={
                  data.manager === "Y" ? "text-success" : "text-danger"
                }
              >
                <b>{data.manager === "Y" ? "Sim" : "Não"}</b>
              </span>
            );
          }}
        ></Column>
        <Column
          header="Último acesso"
          body={(data) => {
            return isoToBrDateTime(data.ultimoAcesso);
          }}
        ></Column>
        <Column
          header="Última atividade"
          body={(data) => {
            return isoToBrDateTime(data.ultimaAtividade);
          }}
        ></Column>
      </DefaultTable>
    </div>
  );
};

export default memo(TabelaUsuarios);
