import verificarUsuarioAdmin from "../middleware/verificarUsuarioAdmin";
import Error404 from "../error/Error404";

const AdminRoute = ({ children }) => {
  if (verificarUsuarioAdmin()) {
    return children;
  }

  return <Error404 />;
};

export default AdminRoute;
