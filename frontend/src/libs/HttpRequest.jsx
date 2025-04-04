import axios from "axios";
import { exibirNotificacao } from "../components/App/contexts/ToastContext";
import history from "./history";
import verificarSessaoSistemaAtiva from "../middleware/verificarSessaoSistemaAtiva";

const HttpRequest = (baseURL, exibirNotificacoes = true) => {
  const instance = axios.create({
    baseURL: baseURL,
  });

  instance.interceptors.request.use(
    async (config) => {
      return config;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401 && location.pathname !== "/login") {
        //Caso o usuário esteja logado e o cód. de resposta retornado seja 401, provavelmente é porque o token expirou e a sessão será encerrada
        history.push("/logout");
      }

      if (error?.config?.method === "get") {
        if (error?.response?.status !== 401) {
          if (verificarSessaoSistemaAtiva() && exibirNotificacoes) {
            exibirNotificacao(
              "error",
              "Falha ao realizar a operação. Tente novamente mais tarde."
            );
          }
        }
        if (error?.code === "ERR_NETWORK" && navigator.onLine) {
        }
      }

      if (
        error?.config?.method === "post" ||
        error?.config?.method === "patch" ||
        error?.config?.method === "put" ||
        error?.config?.method === "delete"
      ) {
        if (error?.response?.status !== 401) {
          if (verificarSessaoSistemaAtiva() && exibirNotificacoes) {
            exibirNotificacao(
              "error",
              "Falha ao realizar a operação. Tente novamente mais tarde."
            );
          }
        }
        if (error?.response?.status === 401) {
        }
        if (error?.code === "ERR_NETWORK" && navigator.onLine) {
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export default HttpRequest;
