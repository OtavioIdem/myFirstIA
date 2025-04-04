import React, { useEffect } from "react";
import DefaultPage from "../components/template/DefaultPage";
import CardLogin from "../components/pages/Login/CardLogin";
import "./style/Login.css";
import setItemLocalStorage from "../utils/localStorage/setItemLocalStorage";
import alterarTitleDom from "../utils/generic/alterarTitleDom";

const Login = () => {
  useEffect(() => {
    setItemLocalStorage("mod", "logon");
    alterarTitleDom("Olá");
  }, []);

  return (
    <DefaultPage showLoad={false}>
      <CardLogin />
    </DefaultPage>
  );
};

export default Login;
