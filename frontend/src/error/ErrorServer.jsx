import React, { useEffect, useState } from "react";
import "./style/Error404.css";
import NotFound from "../assets/errorserver.png";
import alterarTitleDom from "../utils/generic/alterarTitleDom";
import { encryptData } from "../libs/encrypt";

const ErrorServer = ({ errorCode, errorTextCode, httpOperation = "GET" }) => {
  localStorage.setItem("load", encryptData(0));

  const [showPage, setShowPage] = useState(false);

  setTimeout(() => {
    setShowPage(true);
  }, 50);

  useEffect(() => {
    console.error(`${httpOperation} ${location.href} ${errorCode} (${errorTextCode})`);
    alterarTitleDom("Falha na requisição");
    console.error(
      `Failed to load resource: the server responded with a status of ${errorCode} ()`
    );
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
                <span className="gray-text-light">Falha na requisição.</span>
              </p>
              <div className="sis-logo-message-container">
                <span
                  className="logo-sis-container"
                >
                  <img
                    src="/sis-logo.png"
                    className="logo-sis"
                    alt="Logotipo do Módulo de Compras"
                  />
                </span>
                <div className="message-container">
                  <p className="m-0">
                    O servidor encontrou uma falha e não pode completar sua
                    requisição. Agradecemos a paciência enquanto trabalhamos
                    para resolver o problema.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorServer;
