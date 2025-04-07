export default function travarDestravarOverflowBody(travar) {
  const body = document.querySelector("body");

  if (travar) {
    if (window.innerWidth < 768) body.style.overflowY = "hidden";

    return;
  }

  body.style.overflowY = "auto";
  return;
}
