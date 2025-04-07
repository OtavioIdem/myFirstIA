import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import ErrorServer from "./../../../../error/ErrorServer";
import ErrorConnection from "./../../../../error/ErrorConnection";
import ErrorUnauthorized from "./../../../../error/ErrorUnauthorized";
import getItemLocalStorage from "./../../../../utils/localStorage/getItemLocalStorage";
import CardMensagens from "./../../../Generic/CardMensagens";
import {
  verificaSeOTemaUsuarioAtualEscuro,
  criarTemaCasoNecessario,
} from "../../../../middleware/alterarOuVerificarTemaAtual";
import importarTemaEscuro from "./../../../../utils/theme/importarTemaEscuro";
import iniciarSessao from "./../../../../utils/login/iniciarSessao";
import redirecionarParaPortalGestao from "./../../../../utils/generic/redirecionarParaPortalGestao";
import verificarSessaoSSOAtiva from "../../../../middleware/verificarSessaoSSOAtiva";
import usuariosSimulacao from "./../../../../data/usuariosSimulacao";
import themeVerify from "../../../../utils/theme/themeVerify";
import api from "./../../../../connection/Api-default-connection";

const CardLogin = () => {
  const navigate = useNavigate();

  const [exibirErroServidor] = useState(false);
  const [exibirErroConexao] = useState(false);
  const [exibirErroAutorizacao] = useState(false);

  const [errorCode] = useState(null);
  const [errorTextCode] = useState("");

  const [exibirCard, setExibirCard] = useState(false);

  //Função de exemplo que realiza o login no sistema
  const realizarLoginSistema = async () => {
    const dadosSessao = usuariosSimulacao.pedro;

    criarTemaCasoNecessario();
    if (verificaSeOTemaUsuarioAtualEscuro()) {
      importarTemaEscuro();
    }

    setTimeout(() => {
      iniciarSessao(dadosSessao);
      themeVerify();
      navigate("/dashboard");
    }, 750);
  };

  useEffect(() => {
    if (
      verificarSessaoSSOAtiva() &&
      !getItemLocalStorage("token-sis", false) &&
      !getItemLocalStorage("data-session")
    ) {
      setTimeout(() => {
        setExibirCard(true);
      }, 120);
      realizarLoginSistema();
      return;
    }

    redirecionarParaPortalGestao();
    return;
  }, []);

  return (
    verificarSessaoSSOAtiva() &&
    !getItemLocalStorage("token-sis", false) &&
    !getItemLocalStorage("data-session") && (
      <>
        {!exibirErroServidor &&
          !exibirErroConexao &&
          !exibirErroAutorizacao && (
            <CardMensagens
              className={!exibirCard ? " hidden" : ""}
              title="Olá."
              message="Por favor, aguarde enquanto realizamos a autenticação necessária. Não vai demorar."
            />
          )}
        {exibirErroServidor && (
          <ErrorServer
            errorCode={errorCode}
            errorTextCode={errorTextCode}
            httpOperation="POST"
          />
        )}
        {exibirErroConexao && <ErrorConnection httpOperation="POST" />}
        {exibirErroAutorizacao && <ErrorUnauthorized httpOperation="POST" />}
      </>
    )
  );
};

export default memo(CardLogin);
