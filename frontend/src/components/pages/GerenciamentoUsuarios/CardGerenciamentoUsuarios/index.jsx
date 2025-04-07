import React, { memo } from "react";
import DefaultCard from "./../../../Default/DefaultCard";
import TabelaUsuarios from "./session/TabelaUsuarios";

const CardGerenciamentoUsuarios = () => {
  return (
    <DefaultCard
      title="Gerenciamento de Usuários"
      caminhoPagina={["Gerenciamento", "Usuários"]}
    >
      <TabelaUsuarios />
    </DefaultCard>
  );
};

export default memo(CardGerenciamentoUsuarios);
