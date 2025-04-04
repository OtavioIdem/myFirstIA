import getEnv from "../env/getEnv";

export default function alterarTitleDom(titulo) {
  const title = document.querySelector("title");
  title.innerText = (titulo ? `${titulo} / ` : "") + getEnv("SIS_NOMENCLATURA");
}
