import React, { useEffect } from "react";
import "./style/Error404.css";
import NotFound from "../assets/errorlogo.png";
import retornaBaseTemplate from "../utils/env/retornaBaseTemplate";
import NotFoundVansil from "../assets/error-logo-vansil.png";
import NotFoundNatureLab from "../assets/error-logo-naturelab.png";
import alterarTitleDom from "../utils/generic/alterarTitleDom";
import { encryptData } from "../libs/encrypt";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  localStorage.setItem("load", encryptData(0));

  const navigate = useNavigate();

  useEffect(() => {
    console.error(`GET ${location.href} 404 (Not Found)`);
    alterarTitleDom("Conteúdo não encontrado");
    console.error(
      "Failed to load resource: the server responded with a status of 404 ()"
    );
  }, []);

  const baseTemplate = retornaBaseTemplate();

  return (
    <div className="content-page-error404" id="default-card-container">
      <div className="container-element-page">
        <div className="container-page-error">
          <div className="header-page-error">
            <span className="logo-notfound-container">
              <img
                src={
                  baseTemplate === "FL"
                    ? NotFound
                    : baseTemplate === "VS" || baseTemplate === "VI"
                    ? NotFoundVansil
                    : NotFoundNatureLab
                }
                alt="Logotipo aplicação"
                className="logo-sis"
              />
            </span>
          </div>
          <div className="container-text">
            <p className="mb-3" style={{ fontSize: "1.2rem" }}>
              <b>Erro. </b>
              <span className="gray-text-light">Conteúdo não encontrado.</span>
            </p>
            <div className="sis-logo-message-container">
              <span
                className="logo-sis-container tooltip-404-notfound-dashboard"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                <img
                  src="/sis-logo.png"
                  className="logo-sis"
                  alt="Logotipo do Módulo de Compras"
                />
              </span>
              <div className="message-container">
                <p className="m-0">
                  Quando isso acontece, geralmente é porque o conteúdo não
                  existe, foi movido ou é visível para um número limitado de
                  pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
