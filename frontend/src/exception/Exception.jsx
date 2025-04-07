import getEnv from "../utils/env/getEnv";

export default class Exception {
  constructor(codigoErro = "", message) {
    this.message = message;
    this.codigoErro = codigoErro;

    const envMode = getEnv("DEV");

    if (envMode === "Y") {
      throw new Error(`Erro ${codigoErro}. ${message}.`);
    }

    throw new Error(
      `Erro no cliente.${codigoErro !== "" ? " " + codigoErro : ""}`
    );
  }
}
