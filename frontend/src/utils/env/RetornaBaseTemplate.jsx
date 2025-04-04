import Exception from "../../exception/Exception";
import getEnv from "./getEnv";

export default function retornaBaseTemplate() {
  const baseTemplate = getEnv("BASE_TEMPLATE");

  if (
    baseTemplate !== "FL" &&
    baseTemplate !== "VS" &&
    baseTemplate !== "VI" &&
    baseTemplate !== "NL"
  ) {
    throw new Exception(
      "BAS1024",
      "A BASE_TEMPLATE informada no .env é inválida. Só são aceitos os valores FL, VS, VI e NL"
    );
  }

  return baseTemplate;
}
