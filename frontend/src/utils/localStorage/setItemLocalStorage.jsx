import { encryptData } from "../../libs/encrypt";

export default function setItemLocalStorage(name, value, encryptItem = true) {
  localStorage.setItem(name, encryptItem ? encryptData(value) : value);
}
