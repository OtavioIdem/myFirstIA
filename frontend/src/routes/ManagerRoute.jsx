import verificarUsuarioManager from "../middleware/verificarUsuarioManager";
import Error404 from "../error/Error404";

const ManagerRoute = ({ children }) => {
  if (verificarUsuarioManager()) {
    return children;
  }

  return <Error404 />;
};

export default ManagerRoute;
