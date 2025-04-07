import verificarSessaoSistemaAtiva from "../middleware/verificarSessaoSistemaAtiva";
import verificarSessaoSSOAtiva from "../middleware/verificarSessaoSSOAtiva";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  if (verificarSessaoSistemaAtiva() && verificarSessaoSSOAtiva())
    return children;

  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
