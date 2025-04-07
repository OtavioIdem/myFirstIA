import React, { createContext, useState } from "react";

export const PaginaAtualContext = createContext(null);

export const PaginaAtualProvider = ({ children }) => {
  const [paginaAtual, setPaginaAtual] = useState(null);

  return (
    <PaginaAtualContext.Provider value={{ paginaAtual, setPaginaAtual }}>
      {children}
    </PaginaAtualContext.Provider>
  );
};
