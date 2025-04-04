import React, { useEffect, useState } from "react";
import "./style/Error404.css";
import NotFound from "../assets/unauthorized-access.png";
import alterarTitleDom from "../utils/generic/alterarTitleDom";
import { encryptData } from "../libs/encrypt";
import DefaultButton from "../components/Default/Button/DefaultButton";
import redirecionarParaPortalGestao from "../utils/generic/redirecionarParaPortalGestao";
import getEnv from "../utils/env/getEnv";

const ErrorUnauthorized = ({ httpOperation = "GET" }) => {
  localStorage.setItem("load", encryptData(0));

  const [showPage, setShowPage] = useState(false);

  setTimeout(() => {
    setShowPage(true);
  }, 50);

  useEffect(() => {
    console.error(`${httpOperation} ${location.href} 401 (Unauthorized)`);
    alterarTitleDom("Acesso não autorizado");
    console.error(
      `Failed to load resource: the server responded with a status of 401 ()`
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
                <span className="gray-text-light">Acesso não autorizado.</span>
              </p>
              <div className="sis-logo-message-container">
                <span
                  className="logo-sis-container"
                >
                  <img
                    src="/sis-logo.png"
                    className="logo-sis"
                    alt={`Logotipo do ${getEnv("SIS_NOMENCLATURA")}`}
                  />
                </span>
                <div className="flex flex-column">
                  <div className="message-container">
                    <p className="m-0">
                      Você não possui autorização para acessar esta aplicação.
                      Se você achar que isso não está correto, por favor, entre
                      em contato com o departamento Tecnologia da Informação.
                    </p>
                  </div>
                  <div className="action-container">
                    <div className="card grid">
                      <div className="col-12 md:col-8 lg:col-6 mt-2">
                        <DefaultButton
                          icon="pi pi-arrow-up-left"
                          label="Sair"
                          className="w-full"
                          onClick={() => redirecionarParaPortalGestao()}
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

export default ErrorUnauthorized;
