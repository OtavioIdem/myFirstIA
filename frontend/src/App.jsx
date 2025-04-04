import React from "react";
import Rotas from "./services/Rotas";
import getEnv from "./utils/env/getEnv";
import InternetOfflineAlert from "./components/Generic/InternetOfflineAlert";
import { PaginaAtualProvider } from "./components/App/contexts/PaginaAtualContext";

const App = () => {
  document.querySelector("title").innerText = getEnv("SIS_NOMENCLATURA");

  return (
    <>
      <PaginaAtualProvider>
        <InternetOfflineAlert />
        <Rotas />
      </PaginaAtualProvider>
    </>
  );
};

export default App;
