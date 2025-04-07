import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import history from "../libs/history";
import Dashboard from "../pages/Dashboard";
import GerenciamentoUsuarios from "../pages/GerenciamentoUsuarios";
import RedirecionarDashboard from "../components/pages/Dashboard/RedirecionarDashboard";
import DefaultLayout from "../components/template/DefaultLayout";
import DefaultLayoutWithoutSidebar from "../components/template/DefaultLayoutWithoutSidebar";
import Error404 from "../error/Error404";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import LoginRoute from "../routes/LoginRoute";
import LogoutRoute from "../routes/LogoutRoute";
import PrivateRoute from "../routes/PrivateRoute";
import AdminRoute from "../routes/AdminRoute";
import ManagerRoute from "../routes/ManagerRoute";
import MinhaConta from "../pages/MinhaConta";
import Diversos from "../pages/Example/Diversos";

const Rotas = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route
          element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          }
          path="/login"
        />
        <Route
          element={
            <LogoutRoute>
              <Logout />
            </LogoutRoute>
          }
          path="/logout"
        />
        <Route
          element={
            <PrivateRoute>
              <RedirecionarDashboard />
            </PrivateRoute>
          }
          path="/"
        />
        <Route
          element={<DefaultLayoutWithoutSidebar showSidebar={false} />}
          path="/"
        >
          <Route
            element={
              <PrivateRoute>
                <Error404 />
              </PrivateRoute>
            }
            path="*"
          />
          <Route
            element={
              <PrivateRoute>
                <MinhaConta />
              </PrivateRoute>
            }
            path="minhaconta"
          />
        </Route>
        <Route element={<DefaultLayout />} path="/">
          <Route
            element={
              <PrivateRoute>
                <RedirecionarDashboard />
              </PrivateRoute>
            }
            path="home"
          />
          <Route
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
            path="dashboard"
          />
          <Route
            element={
              <PrivateRoute>
                <ManagerRoute>
                  <GerenciamentoUsuarios />
                </ManagerRoute>
              </PrivateRoute>
            }
            path="gerenciamento/usuarios"
          />
          <Route
            element={
              <PrivateRoute>
                <Diversos />
              </PrivateRoute>
            }
            path="exemplos/padrao/formulario/diversos"
          />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default Rotas;
