import React, { memo, useEffect } from "react";
import alterarTitleDom from "../utils/generic/alterarTitleDom";
import CardGerenciamentoUsuarios from "../components/pages/GerenciamentoUsuarios/CardGerenciamentoUsuarios";
import setItemLocalStorage from "../utils/localStorage/setItemLocalStorage";
import useCurrentPage from "../utils/sidebar/useCurrentPage";
import idPaginas from "../data/idPaginas";

const GerenciamentoUsuarios = () => {
  const { setCurrentPage } = useCurrentPage();

  useEffect(() => {
    setCurrentPage(idPaginas.usuarios);
    setItemLocalStorage("mod", "usuarios");
    alterarTitleDom("Gerenciamento de Usuários");
  }, []);

  return <CardGerenciamentoUsuarios />;
};

export default memo(GerenciamentoUsuarios);
