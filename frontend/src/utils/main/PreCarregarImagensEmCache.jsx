import preloadImage from "../generic/preloadImage";
import retornaBaseTemplate from "../env/retornaBaseTemplate";

export default function preCarregarImagensEmCache() {
  preloadImage("/sis-logo.png");
  preloadImage("/sis-logo-branco.png");
  preloadImage("/grupo-felidae-logo.png");
  preloadImage("/grupo-felidae-branco-logo.png");
  preloadImage("/p-gestao.png");

  const baseTemplate = retornaBaseTemplate();

 if(baseTemplate === "FL"){
  preloadImage("/no-internet1-felidae.png");
  preloadImage("/no-internet2-felidae.png");
  preloadImage("/no-internet3-felidae.png");
 }

 if (baseTemplate === "VS" || baseTemplate === "VI"){
  preloadImage("/no-internet1-vansil.png");
  preloadImage("/no-internet2-vansil.png");
  preloadImage("/no-internet3-vansil.png");
 }

 if(baseTemplate === "NL"){
  preloadImage("/no-internet1-naturelab.png");
  preloadImage("/no-internet2-naturelab.png");
  preloadImage("/no-internet3-naturelab.png");
 }
}
