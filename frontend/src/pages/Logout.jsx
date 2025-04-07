import React, { useEffect } from "react";
import "./style/Login.css";
import CardLogout from "../components/pages/Logout/CardLogout";
import alterarTitleDom from "../utils/generic/alterarTitleDom";
import setItemLocalStorage from "../utils/localStorage/setItemLocalStorage";
import DefaultPage from "../components/template/DefaultPage";

const Logout = () => {
  useEffect(() => {
    setItemLocalStorage("mod", "logoff");
    alterarTitleDom("Até logo");
  }, []);

  return (
    <DefaultPage showLoad={false}>
      <CardLogout />
    </DefaultPage>
  );
};

export default Logout;
