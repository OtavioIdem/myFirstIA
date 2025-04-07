import React, { memo } from "react";
import "./style/Footer.css";
import getEnv from "../../../utils/env/getEnv";
import verificaAmbienteAtualDev from "../../../utils/env/verificaAmbienteAtualDev";
import { verificaSeOTemaUsuarioAtualEscuro } from "../../../middleware/alterarOuVerificarTemaAtual";
import retornaBaseTemplate from "../../../utils/env/retornaBaseTemplate";
import ColetarAnoAtual from "../../../utils/login/coletarAnoAtual";

const Footer = () => {
  const nomeSistema = getEnv("SIS_NOMENCLATURA");

  const versaoSistema = getEnv("API_VERSION");

  const sistemaLancou = getEnv("SIS_LANCADO");

  const baseTemplate = retornaBaseTemplate();

  const anoAtual = ColetarAnoAtual();

  return (
    <footer className="footer">
      <div className="sis-info-container">
        <span className="felidae-logo-container">
          <img
            className="felidae-logo"
            src={
              verificaSeOTemaUsuarioAtualEscuro()
                ? "/grupo-felidae-logo-branco.png"
                : "/grupo-felidae-logo.png"
            }
            alt="Logotipo Grupo Felidae"
          />
        </span>
        <div className="sis-version-container">
          <p style={{ margin: 0, fontSize: "inherit" }}>
            <b>{`${nomeSistema} ${
              (verificaAmbienteAtualDev() ? "hom-" : "") +
              (sistemaLancou === "Y" ? "v" : "")
            }${versaoSistema}`}</b>
          </p>
          <p style={{ margin: 0, fontSize: "inherit" }}>
            <b>{`© ${anoAtual} Grupo Felidae`}</b>
          </p>
        </div>
      </div>
      {(baseTemplate === "VS" ||
        baseTemplate === "VI" ||
        baseTemplate === "NL") && (
        <div className="vansil-logo-container">
          <img
            className="vansil-logo"
            src={
              baseTemplate === "VI"
                ? verificaSeOTemaUsuarioAtualEscuro()
                  ? "/vansil-industria-logo-branco.png"
                  : "/vansil-industria-logo.png"
                : baseTemplate === "VS"
                ? verificaSeOTemaUsuarioAtualEscuro()
                  ? "/vansil-saude-animal-logo-branco.png"
                  : "/vansil-saude-animal-logo.png"
                : verificaSeOTemaUsuarioAtualEscuro()
                ? "/naturelab-logo-branco.png"
                : "/naturelab-logo.png"
            }
            alt={`Logotipo ${
              baseTemplate === "VS"
                ? "Vansil Saúde Animal"
                : baseTemplate === "VI"
                ? "Vansil Indústria"
                : "NatureLab"
            }`}
          />
        </div>
      )}
    </footer>
  );
};

export default memo(Footer);
