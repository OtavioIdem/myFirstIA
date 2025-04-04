import getEnv from "./getEnv";

export default function verificaAmbienteAtualDev() {
  const env = getEnv("DEV");

  return env === "Y";
}
