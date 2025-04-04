import React, { memo } from "react";
import { Card } from "primereact/card";
import ProgressBarLoad from "../../App/ProgressBarLoad";
import { verificaSeOTemaUsuarioAtualEscuro } from "../../../middleware/alterarOuVerificarTemaAtual";
import getEnv from "../../../utils/env/getEnv";
import retornaBaseTemplate from "../../../utils/env/retornaBaseTemplate";

const CardMensagens = ({ title, message, className = "" }) => {
  const nomeAplicacao = getEnv("SIS_NOMENCLATURA");

  const baseTemplate = retornaBaseTemplate();

  const header = (
    <div className="header-container flex flex-column align-items-center">
      <img
        alt={`Logotipo do ${nomeAplicacao}`}
        src={
          verificaSeOTemaUsuarioAtualEscuro()
            ? "/sis-logo-branco.png"
            : "/sis-logo.png"
        }
        className="sislogo-login pointer-none select-none"
      />
      <h4 className="mt-1 m-0">{nomeAplicacao}</h4>
    </div>
  );

  return (
    <div
      className={`card flex justify-content-center align-items-center${className}`}
      style={{ height: "100vh" }}
    >
      <Card
        title={title}
        subTitle={message}
        header={header}
        className="md:w-25rem card-login relative"
        style={{ paddingTop: "6px" }}
      >
        <div className="w-100 progress-bar-login-container">
          <ProgressBarLoad />
        </div>
        <div
          className={
            "grupo-felidae-logo-login-container" +
            (baseTemplate !== "FL" ? "2" : "")
          }
        >
          <img
            className="grupo-felidae-logo-login pointer-none select-none"
            src={
              verificaSeOTemaUsuarioAtualEscuro()
                ? "/grupo-felidae-logo-branco.png"
                : "/grupo-felidae-logo.png"
            }
            alt="Logotipo do Grupo Felidae"
          />
        </div>
        {(baseTemplate === "VS" ||
          baseTemplate === "VI" ||
          baseTemplate === "NL") && (
          <div className="grupo-felidae-logo-login-container">
            <img
              className="vansil-naturelab-logo-login pointer-none select-none"
              src={
                baseTemplate === "VS"
                  ? verificaSeOTemaUsuarioAtualEscuro()
                    ? "/vansil-saude-animal-logo-branco.png"
                    : "/vansil-saude-animal-logo.png"
                  : baseTemplate === "VI"
                  ? verificaSeOTemaUsuarioAtualEscuro()
                    ? "/vansil-industria-logo-branco.png"
                    : "vansil-industria-logo.png"
                  : verificaSeOTemaUsuarioAtualEscuro()
                  ? "/naturelab-logo-branco.png"
                  : "naturelab-logo.png"
              }
              alt="Logotipo empresa filiada"
            />
          </div>
        )}
      </Card>
    </div>
  );
};

export default memo(CardMensagens);
