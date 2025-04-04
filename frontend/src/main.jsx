import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./style/main.css";
import "./style/text-class-colors.css";
import "./style/layout.css";
import "./style/size-element.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import themeVerify from "./utils/theme/themeVerify.jsx";
import adicionarTraducaoPtBrPrime from "./utils/main/adicionarTraducaoPtBrPrime.jsx";
import preCarregarImagensEmCache from "./utils/main/preCarregarImagensEmCache.jsx";
import tryReload from "./utils/main/tryReload.jsx";
import createDomRoot from "./utils/main/createDomRoot.jsx";

const startApplication = () => {
  preCarregarImagensEmCache();
  themeVerify();
  adicionarTraducaoPtBrPrime();
  tryReload();
  createDomRoot();
};

startApplication();
