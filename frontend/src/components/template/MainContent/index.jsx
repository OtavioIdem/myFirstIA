import React, { memo, useContext } from "react";
import SidebarContext from "../../../contexts/SidebarContext";

const MainContent = ({ children, showSidebar }) => {
  const { abrirSideBar } = useContext(SidebarContext);

  return (
    <div
      id="content-page-default-container"
      className={`content-page-container${
        !abrirSideBar || !showSidebar
          ? " content-page-container-sidebar-closed"
          : ""
      }`}
    >
      {children}
    </div>
  );
};

export default memo(MainContent);
