import { createContext, useState } from "react";

const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [abrirSideBar, setAbrirSideBar] = useState(
    window.innerWidth <= 768 ? false : true
  );
  return (
    <SidebarContext.Provider value={{ abrirSideBar, setAbrirSideBar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
