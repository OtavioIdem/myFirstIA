import React, { createContext, useState } from "react";

export const ItensCarregadosContext = createContext(null);

export const ItensCarregadosProvider = ({ children }) => {
  const [carregado, setCarregado] = useState(null);

  return (
    <ItensCarregadosContext.Provider value={{ carregado, setCarregado }}>
      {children}
    </ItensCarregadosContext.Provider>
  );
};
