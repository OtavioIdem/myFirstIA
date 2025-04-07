import verificarSessaoSistemaAtiva from "../middleware/verificarSessaoSistemaAtiva";
import { Navigate } from "react-router-dom";

const LogoutRoute = ({ children }) => {
  if (verificarSessaoSistemaAtiva()) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default LogoutRoute;
