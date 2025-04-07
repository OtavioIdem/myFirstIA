import React, { memo } from "react";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import "./style/DefaultCard.css";
import verificarSessaoSistemaAtiva from "../../../middleware/verificarSessaoSistemaAtiva";
import DefaultCardDivider from "./session/DefaultCardDivider";
import { ToastProvider } from "./../../App/contexts/ToastContext";
import DefaultBreadCrumb from "./../BreadCrumb/DefaultBreadCrumb";

const DefaultCard = ({
  title,
  className = "",
  children,
  caminhoPagina = [],
  breadcrumb = true,
  showBackBtn = true,
}) => {
  const TitleHeader = () => {
    const navigate = useNavigate();

    const navegar = (url) => {
      if (verificarSessaoSistemaAtiva()) {
        navigate(url);
        return;
      }

      navigate("/logout");
      return;
    };

    return (
      <div className="title-header-container">
        {showBackBtn && (
          <span className="back-btn-container">
            <button
              className="card-btn"
              onClick={() => {
                navegar(-1);
              }}
            >
              <i className="pi pi-arrow-left"></i>
            </button>
          </span>
        )}
        <div
          className={`p-card-title mb-0 ${
            showBackBtn ? "title-margin-left" : ""
          }`}
          data-pc-section="title"
        >
          {title}
        </div>
      </div>
    );
  };

  return (
    <ToastProvider>
      <div className="flex flex-column w-100" id="default-card-container">
        {breadcrumb && <DefaultBreadCrumb caminhoPagina={caminhoPagina} />}
        <Card
          title={<TitleHeader />}
          className={`card-custom h-100${className ? " " + className : ""}`}
        >
          <DefaultCardDivider />
          {children}
        </Card>
      </div>
    </ToastProvider>
  );
};

export default memo(DefaultCard);
