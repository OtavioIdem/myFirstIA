import React, { useEffect, memo } from "react";
import CardMensagens from "./../../../Generic/CardMensagens";
import limparSessao from "./../../../../middleware/limparSessao";
import redirecionarParaPortalGestao from "./../../../../utils/generic/redirecionarParaPortalGestao";

const CardLogout = () => {
  useEffect(() => {
    limparSessao();

    setTimeout(() => {
      redirecionarParaPortalGestao();
    }, 750);
  }, []);

  return (
    <CardMensagens
      title="Até logo."
      message="Sua sessão está sendo encerrada."
    />
  );
};

export default memo(CardLogout);
