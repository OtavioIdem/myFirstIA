import React, { useEffect, useState } from "react";
import "./style/Error404.css";
import NotFound from "../assets/client-error.png";
import alterarTitleDom from "../utils/generic/alterarTitleDom";
import DefaultButton from "../components/Default/Button/DefaultButton";
import getItemLocalStorage from "../utils/localStorage/getItemLocalStorage";
import setItemLocalStorage from "../utils/localStorage/setItemLocalStorage";
import limparSessao from "../middleware/limparSessao";
import verificaAmbienteAtualDev from "../utils/env/verificaAmbienteAtualDev";

const ErrorClient = ({ error, resetErrorBoundary }) => {
  const [showPage, setShowPage] = useState(false);

  const [tentativa] = useState(
    getItemLocalStorage("try-reload")
      ? parseInt(getItemLocalStorage("try-reload"))
      : 0
  );

  setTimeout(() => {
    setShowPage(true);
  }, 50);

  useEffect(() => {
    alterarTitleDom("Falha no cliente");
  }, []);

  return (
    <div className={`god${!showPage ? " d-none" : ""}`}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="container-element-page">
          <div className="container-page-error">
            <div className="header-page-error">
              <span className="logo-notfound-container">
                <img
                  src={NotFound}
                  alt="Logotipo aplicação"
                  className="logo-sis"
                />
              </span>
            </div>
            <div className="container-text">
              <p className="mb-3" style={{ fontSize: "1.2rem" }}>
                <b>Erro. </b>
                <span className="gray-text-light">Falha no cliente.</span>
              </p>
              <div className="sis-logo-message-container">
                <span className="logo-sis-container tooltip-server-error-dashboard">
                  <img
                    src="/sis-logo.png"
                    className="logo-sis"
                    alt="Logotipo do Módulo de Compras"
                  />
                </span>
                <div className="flex flex-column">
                  <div className="message-container">
                    <p className="m-0">
                      {verificaAmbienteAtualDev()
                        ? `${error}`
                        : "Houve uma falha no cliente e não foi possível concluir sua solicitação. Agradecemos a paciência enquanto trabalhamos para resolver o problema. Por favor, tente novamente."}
                    </p>
                    <p className="mt-1 mb-0">
                      <b>{`${
                        tentativa !== 5
                          ? `Tentativa ${tentativa} de 5.`
                          : "Não foi possível resolver o problema. Deseja reinciar a aplicação?"
                      }`}</b>
                    </p>
                  </div>
                  <div className="action-container">
                    <div className="card grid">
                      {tentativa === 5 && (
                        <div className="col-12 md:col-8 lg:col-6 mt-2">
                          <DefaultButton
                            icon="pi pi-refresh"
                            label={"Reiniciar"}
                            outlined={true}
                            onClick={() => {
                              limparSessao();
                              window.location.href = "/login";
                            }}
                          />
                        </div>
                      )}
                      {tentativa !== 5 && (
                        <div className="col-12 md:col-8 lg:col-6 mt-2">
                          <DefaultButton
                            icon="pi pi-refresh"
                            label={"Tentar novamente"}
                            outlined={true}
                            onClick={() => {
                              if (tentativa < 5) {
                                setItemLocalStorage(
                                  "try-reload",
                                  tentativa + 1
                                );
                                resetErrorBoundary();
                              }
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorClient;
