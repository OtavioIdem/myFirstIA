import adicionarTresHorasIsoDate from "./private/adicionarTresHoras";

export default function isoToBrDate(dateISO) {
  try {
    if (dateISO === "" || dateISO === null) return "";

    const dateISOConvertida = adicionarTresHorasIsoDate(dateISO);

    const data = new Date(dateISOConvertida);

    if (data === "Invalid Date") return "";

    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // O mês é baseado em zero, por isso é necessário adicionar 1
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  } catch {
    return "";
  }
}
