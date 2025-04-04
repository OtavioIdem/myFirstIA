import HttpRequest from "../libs/HttpRequest";
import getEnv from "../utils/env/getEnv";

const env = getEnv("DEV");
const isLocalHost = getEnv("LOCALHOST");
const backendUrlProd = getEnv("BACKEND_URL_PROD");
const backendUrlDev = getEnv("BACKEND_URL_DEV");
const localHostUrl = getEnv("BACKEND_URL_LOCALHOST");

const api = HttpRequest(
  isLocalHost === "Y"
    ? localHostUrl
    : env === "Y"
    ? backendUrlDev
    : backendUrlProd
);

export default api;
