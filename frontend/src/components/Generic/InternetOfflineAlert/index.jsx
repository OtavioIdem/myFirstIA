import React, { memo, useEffect, useState, useRef } from "react";
import "./style/InternetOfflineAlert.css";
import InternetOfflineAlertDialog from "./session/InternetOfflineAlertDialog";
import { exibirNotificacao } from "../../App/contexts/ToastContext";
import genericMessages from "../../../messages/genericMessages";
import retornaBaseTemplate from "../../../utils/env/retornaBaseTemplate";

const InternetOfflineAlert = () => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // Função para definir o estado para offline quando a conexão cair
    const handleOffline = () => setIsOffline(true);
    // Função para definir o estado para online quando a conexão for restaurada
    const handleOnline = () => setIsOffline(false);

    // Adiciona os listeners para detectar mudanças no status da conexão
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Limpa os listeners ao desmontar o componente
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  const countAtual = useRef(0);

  const baseTemplate = retornaBaseTemplate();

  useEffect(() => {
    if (isOffline) {
      countAtual.current += 1;
      exibirDialogSemConexao(countAtual.current);
      return;
    }

    countAtual.current += 1;
    setOpenDialogInternetOff(false);

    const godDiv = document.querySelector(".god");
    godDiv !== null && godDiv !== undefined ? (godDiv.style.filter = "") : null;

    if (countAtual.current > 1) {
      exibirNotificacao("ok", genericMessages.internetConnectionOn);
    }
  }, [isOffline]);

  const [openDialogInternetOff, setOpenDialogInternetOff] = useState(false);

  const exibirDialogSemConexao = async (countNoMomentoDaExecucaoDaFuncao) => {
    setTimeout(() => {
      if (
        isOffline &&
        countAtual.current === countNoMomentoDaExecucaoDaFuncao
      ) {
        const godDiv = document.querySelector(".god");
        godDiv !== null && godDiv !== undefined
          ? (godDiv.style.filter = "blur(2px)")
          : null;

        setOpenDialogInternetOff(true);
      }
    }, 15000);
    return;
  };

  return (
    isOffline && (
      <div className="internet-offline-alert-body">
        <InternetOfflineAlertDialog
          openDialog={openDialogInternetOff}
          setOpenDialog={setOpenDialogInternetOff}
          className="internet-offline-dialog"
        />
        <div className="internet-offline-container">
          <svg
            className={`internet-offline-img ${
              baseTemplate === "FL"
                ? "felidae"
                : baseTemplate === "VS" || baseTemplate === "VI"
                ? "vansil"
                : "naturelab"
            }`}
          ></svg>
        </div>
      </div>
    )
  );
};

export default memo(InternetOfflineAlert);
