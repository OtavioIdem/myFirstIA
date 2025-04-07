import React, { createContext, useRef, useContext } from "react";
import { Toast } from "primereact/toast";
import VerificaSeDispositivoMobile from "../../../utils/generic/verificaSeDispotivoMobile";

const ToastContext = createContext(null);
let globalExibirToast;

export const ToastProvider = ({ children }) => {
  const toastRef = useRef(null);

  const exibirToast = (severity, summary, detail, life) => {
    if (toastRef.current) {
      toastRef.current.show({
        severity,
        summary,
        detail,
        life: life,
      });
    }
  };
  globalExibirToast = exibirToast;
  return (
    <ToastContext.Provider value={exibirToast}>
      <Toast
        ref={toastRef}
        position={
          !VerificaSeDispositivoMobile() ? "bottom-right" : "top-center"
        }
        className="toast-mobile"
      />
      {children}
    </ToastContext.Provider>
  );
};
export const useToast = () => {
  const ambiente = import.meta.env.VITE_DEV;

  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(
      ambiente === "Y"
        ? "useToast deve ser usado dentro de um ToastProvider"
        : "Erro no cliente. Código TST1001."
    );
  }
  return context;
};

export const exibirNotificacao = (tipo, message, life = 10000) => {
  const ambiente = import.meta.env.VITE_DEV;

  if (globalExibirToast) {
    const tipoToasts = {
      info: () => globalExibirToast("info", "Notificação", message, life),
      ok: () => globalExibirToast("success", "Sucesso", message, life),
      error: () => globalExibirToast("error", "Erro", message, life),
      warn: () => globalExibirToast("warn", "Aviso", message, life),
      sec: () => globalExibirToast("secondary", "Mensagem", message, life),
      cont: () => globalExibirToast("contrast", "Mensagem", message, life),
    };

    tipoToasts[tipo]();
  } else {
    console.error(
      ambiente === "Y"
        ? "ToastProvider não está montado. Certifique-se de que o ToastProvider envolva o aplicativo."
        : "Erro no cliente. Código TST1002."
    );
  }
};
