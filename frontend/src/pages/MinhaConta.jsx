import React, { useEffect } from "react";
import CardMinhaConta from "../components/pages/MinhaConta/CardMinhaConta";
import alterarTitleDom from "../utils/generic/alterarTitleDom";
import setItemLocalStorage from "../utils/localStorage/setItemLocalStorage";
import useCurrentPage from "../utils/sidebar/useCurrentPage";

const MinhaConta = () => {
  const { setCurrentPage } = useCurrentPage();

  useEffect(() => {
    setCurrentPage(null);
    setItemLocalStorage("mod", "config");
    alterarTitleDom("Minha conta");
  }, []);

  return <CardMinhaConta />;
};

export default MinhaConta;
