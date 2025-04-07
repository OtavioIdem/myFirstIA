import React, { memo, useEffect } from "react";
import DefaultPage from "../DefaultPage"; 
import { Outlet, useParams } from "react-router-dom";
import Header from "./../Header";
import MainContent from "../MainContent";
import Footer from "../Footer";
import { SidebarProvider } from "./../../../contexts/SidebarContext";
import Sidebar from "./../Sidebar";
import ControleResponsividadeSidebar from "./../../../functions/Sidebar/ControleResponsividadeSidebar";

const DefaultLayout = ({ showSidebar = true }) => {
  const params = useParams();

  useEffect(() => {
    //Garantindo que a rolagem da página esteja no topo sempre que o usuário trocar de página
    window.scroll(0, 0);
  }, [params]);

  return (
    <DefaultPage showSidebar={showSidebar}>
      <SidebarProvider>
        <Header showSidebarButton={showSidebar} />
        {showSidebar && <Sidebar />}
        <ControleResponsividadeSidebar />
        <MainContent showSidebar={showSidebar}>
          <Outlet />
        </MainContent>
        <Footer />
      </SidebarProvider>
    </DefaultPage>
  );
};

export default memo(DefaultLayout);
