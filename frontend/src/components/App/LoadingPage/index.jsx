import React, { useState } from "react";
import { PuffLoader } from "react-spinners";
import "./style/LoadingPage.css";
import { verificaSeOTemaUsuarioAtualEscuro } from "../../../middleware/alterarOuVerificarTemaAtual";
import getEnv from "../../../utils/env/getEnv";
import retornaBaseTemplate from "../../../utils/env/retornaBaseTemplate";

const LoadingPage = () => {
  const [exibirBarraCarregamento, setExibirBarraCarregamento] = useState(false);

  setTimeout(() => {
    setExibirBarraCarregamento(true);
  }, 100);

  const baseTemplate = retornaBaseTemplate();

  return (
    <div
      className="load-page"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: verificaSeOTemaUsuarioAtualEscuro()
          ? "#1f2937"
          : "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "12288",
      }}
    >
      <div className="card flex justify-content-center align-items-center flex-column">
        <span className="sis-logo-loading-container mb-5">
          <img
            src={
              verificaSeOTemaUsuarioAtualEscuro()
                ? "/sis-logo-branco.png"
                : "/sis-logo.png"
            }
            className="sis-logo-loading"
            alt={`Logotipo do ${getEnv("SIS_NOMENCLATURA")}`}
          />
          <div
            className="overlay-sis-logo-loading"
            style={{
              backgroundColor: verificaSeOTemaUsuarioAtualEscuro()
                ? "#1f2937"
                : "#fff",
            }}
          ></div>
          {exibirBarraCarregamento && (
            <PuffLoader
              color={
                verificaSeOTemaUsuarioAtualEscuro()
                  ? "#fff"
                  : baseTemplate === "FL"
                  ? "#702082"
                  : baseTemplate === "VS" || baseTemplate === "VI"
                  ? "#bc1b10"
                  : "#8dae3e"
              }
              size={170}
              className="sis-logo-loading-puff"
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default LoadingPage;
