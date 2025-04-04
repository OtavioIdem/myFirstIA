import React, { memo, useState, useEffect } from "react";
import { Tooltip } from "primereact/tooltip";
import LoadingPage from "../../App/LoadingPage";

const DefaultPage = ({ children, className = "", showLoad = true }) => {
  const [pageIsLoaded, setPageIsLoaded] = useState(false);
  const timingLoadAleatorio = [400, 600, 800]; //Lista de tempos em MS que serão escolhidos aleatoriamente para esconder o primeiro loading da página
  const indiceAleatorio = Math.floor(
    //Escolhendo aleatoriamente um índice do array de timings
    Math.random() * timingLoadAleatorio.length
  );

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    setTimeout(() => {
      body.style.overflow = "";
      setPageIsLoaded(true);
    }, timingLoadAleatorio[indiceAleatorio]);
  }, []);

  return (
    <div className={`god${className ? " " + className : ""}`}>
      {!pageIsLoaded && showLoad && <LoadingPage />}
      <Tooltip target=".item-tooltip" showDelay={500} hideDelay={0} />
      {children}
    </div>
  );
};

export default memo(DefaultPage);
