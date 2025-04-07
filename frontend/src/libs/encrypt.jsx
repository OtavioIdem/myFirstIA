import CryptoJS from "crypto-js";
import secretKey from "../keys/secretKey";

export function encryptData(data) {
  try {
    if (data === undefined) return "";

    //Criptografando dados
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      secretKey
    ).toString();

    return encryptedData;
  } catch {
    return "";
  }
}

export function decryptData(encryptedData) {
  try {
    if (encryptedData === undefined || encryptedData === "") return null;

    //Descriptografando dados
    const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey);

    const decpt = decryptedData.toString(CryptoJS.enc.Utf8);

    return decpt;
  } catch {
    return "";
  }
}
