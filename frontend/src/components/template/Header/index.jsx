import React, { useEffect, useContext, memo } from "react";
import { Menubar } from "primereact/menubar";
import "./style/Header.css";
import MenuUser from "../MenuUser";
import retornarInformacoesSessao from "../../../utils/session/retornarInformacoesSessao";
import capturarPrimeiraPalavraFrase from "../../../utils/generic/capturarPrimeiraPalavraFrase";
import VerificaSeDispositivoMobile from "../../../utils/generic/verificaSeDispotivoMobile";
import DefaultTooltip from "../../Default/DefaultTooltip";
import getEnv from "../../../utils/env/getEnv";
import { verificaSeOTemaUsuarioAtualEscuro } from "../../../middleware/alterarOuVerificarTemaAtual";
import AlterarPosicaoHeader from "../../../functions/Header/alterarPosicaoHeader";
import SidebarContext from "./../../../contexts/SidebarContext";
import navigateAnchor from "../../../utils/generic/navigateAnchor";

const Header = ({ showSidebarButton = true }) => {
  const { abrirSideBar, setAbrirSideBar } = useContext(SidebarContext);

  useEffect(() => {
    AlterarPosicaoHeader();
  }, []);

  document.addEventListener("scroll", () => {
    AlterarPosicaoHeader();
  });

  const dadosSessao = retornarInformacoesSessao();

  const primeiroNome = capturarPrimeiraPalavraFrase(dadosSessao?.nome);

  const start = (
    <span className="start-header-container flex justify-content-center align-items-center">
      {showSidebarButton && (
        <button
          className="menu-sidebar-header-btn ml-2 mr-2"
          onClick={() => setAbrirSideBar(abrirSideBar ? false : true)}
        >
          <i className="pi pi-bars pointer-none"></i>
        </button>
      )}
      <a
        className="sis-logo-header-anchor sis-logo-header-tooltip"
        href="/dashboard"
        data-pr-tooltip={`Dashboard do ${getEnv("SIS_NOMENCLATURA")}`}
        data-pr-position="mouse"
        data-pr-mousetrack={true}
        onClick={(e) => {
          navigateAnchor(e, "/dashboard");
        }}
      >
        <span className="sis-logo-header-container">
          <img
            alt={`Logotipo do ${getEnv("SIS_NOMENCLATURA")}`}
            src={
              verificaSeOTemaUsuarioAtualEscuro()
                ? "/sis-logo-branco.png"
                : "/sis-logo.png"
            }
            className="sis-logo-header"
          ></img>
        </span>
      </a>
    </span>
  );
  const end = (
    <div className="flex justify-content-center align-items-center">
      {!VerificaSeDispositivoMobile() && (
        <span className="first-name-header-container">
          <p className="ml-0 mt-0 mb-0 mr-2 first-name-header-text">
            {primeiroNome}
          </p>
        </span>
      )}
      <span>
        <MenuUser />
      </span>
    </div>
  );

  return (
    <div id="header-default" className="card header">
      <DefaultTooltip target=".sis-logo-header-tooltip" />
      <Menubar className="default-header m-0" start={start} end={end} />
    </div>
  );
};

export default memo(Header);
