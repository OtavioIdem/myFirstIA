import { decryptData } from "../../libs/encrypt";

export default function getItemLocalStorage(itemName, decryptItem = true) {
  return decryptItem
    ? decryptData(localStorage.getItem(itemName))
    : localStorage.getItem(itemName);
}
