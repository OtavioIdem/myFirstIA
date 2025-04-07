import verificarSessaoSistemaAtiva from "../middleware/verificarSessaoSistemaAtiva";
import verificarSessaoSSOAtiva from "../middleware/verificarSessaoSSOAtiva";
import { Navigate } from "react-router-dom";
import redirecionarParaPortalGestao from "../utils/generic/redirecionarParaPortalGestao";

const LoginRoute = ({ children }) => {
  if (!verificarSessaoSSOAtiva()) {
    redirecionarParaPortalGestao();
    return;
  }

  if (!verificarSessaoSistemaAtiva()) return children;

  return <Navigate to={"/dashboard"} />;
};

export default LoginRoute;
