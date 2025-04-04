import React, { useEffect } from "react";
import alterarTitleDom from "../utils/generic/alterarTitleDom";
import CardDashboard from "../components/pages/Dashboard/CardDashboard";
import setItemLocalStorage from "../utils/localStorage/setItemLocalStorage";
import useCurrentPage from "../utils/sidebar/useCurrentPage";
import idPaginas from "../data/idPaginas";

const Dashboard = () => {
  const { setCurrentPage } = useCurrentPage();

  useEffect(() => {
    setItemLocalStorage("mod", "home");
    alterarTitleDom("");
    setCurrentPage(idPaginas.dashboard);
  }, []);

  return (
    <>
      <CardDashboard />
    </>
  );
};

export default Dashboard;
