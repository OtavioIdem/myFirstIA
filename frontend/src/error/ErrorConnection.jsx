import React, { useEffect, useState } from "react";
import "./style/Error404.css";
import NotFound from "../assets/offline-client.png";
import alterarTitleDom from "../utils/generic/alterarTitleDom";
import setItemLocalStorage from "../utils/localStorage/setItemLocalStorage";
import DefaultButton from "../components/Default/Button/DefaultButton";
import getEnv from "../utils/env/getEnv";

const ErrorConnection = ({ httpOperation = "GET" }) => {
  setItemLocalStorage("load", 0);

  const [showPage, setShowPage] = useState(false);

  setTimeout(() => {
    setShowPage(true);
  }, 50);

  useEffect(() => {
    console.error(`${httpOperation} ${location.href} 504 (Gateway Timeout)`);
    console.error(
      `Failed to load resource: the server responded with a status of 504 ()`
    );

    alterarTitleDom("Tempo limite de requisição excedido");
  }, []);

  return (
    <div className={`content-page${!showPage ? " d-none" : ""}`}>
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
                <img src={NotFound} alt="Logotipo erro" className="logo-sis" />
              </span>
            </div>
            <div className="container-text">
              <p className="mb-3" style={{ fontSize: "1.2rem" }}>
                <b>Erro. </b>
                <span className="gray-text-light">
                  Tempo limite de requisição excedido.
                </span>
              </p>
              <div className="sis-logo-message-container">
                <span className="logo-sis-container">
                  <img
                    src="/sis-logo.png"
                    className="logo-sis"
                    alt={`Logotipo do ${getEnv("SIS_NOMENCLATURA")}`}
                  />
                </span>
                <div className="flex flex-column">
                  <div className="message-container">
                    <p className="m-0">
                      O servidor demorou demais para responder a requisição do
                      cliente. Por favor, tente novamente.
                    </p>
                  </div>
                  <div className="action-container">
                    <div className="card grid">
                      <div className="col-12 md:col-8 lg:col-6 mt-2">
                        <DefaultButton
                          icon="pi pi-refresh"
                          label="Atualizar"
                          className="w-full"
                          onClick={() => location.reload()}
                        />
                      </div>
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

export default ErrorConnection;
