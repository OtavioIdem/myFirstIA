import React, { memo, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card } from "primereact/card";
import ListaMenuSidebar from "./session/ListaMenuSidebar";
import { Button } from "primereact/button";
import SidebarContext from "../../../contexts/SidebarContext";
import { ExpandedItemsProvider } from "./contexts/ExpandedItemsContext";
import { ItensCarregadosProvider } from "./contexts/ItensCarregadosContext";
import AbrirOuFecharSidebar from "../../../functions/Sidebar/abrirOuFecharSidebar";
import "./style/Sidebar.css";

const Sidebar = ({ className = "" }) => {
  const { abrirSideBar, setAbrirSideBar } = useContext(SidebarContext);

  const params = useParams();
  useEffect(() => {
    setAbrirSideBar(window.innerWidth <= 768 ? false : true);
  }, [params]);

  useEffect(() => {
    AbrirOuFecharSidebar(abrirSideBar);
  }, [abrirSideBar]);

  window.addEventListener("resize", () => {
    setAbrirSideBar(window.innerWidth <= 768 ? false : true);
  });

  return (
    <ExpandedItemsProvider>
      <ItensCarregadosProvider>
        <Card
          id="sidebar-default"
          className={`sidebar-default${
            !abrirSideBar ? " sidebar-default-closed" : ""
          }${className !== "" ? " " + className : ""}`}
        >
          <div className="card flex justify-content-center">
            <div>
              <div
                id="sidebar-default-width-container"
                className="sidebar-default-width-container"
                style={{ width: "220px" }}
              >
                <span className="flex justify-content-between align-items-center">
                  <Button
                    severity="secondary"
                    outlined
                    className="rounded-btn close-sidebar-btn"
                    icon="pi pi-times"
                    onClick={() => setAbrirSideBar(false)}
                  />
                </span>
                <ListaMenuSidebar />
              </div>
            </div>
          </div>
        </Card>
      </ItensCarregadosProvider>
    </ExpandedItemsProvider>
  );
};

export default memo(Sidebar);
