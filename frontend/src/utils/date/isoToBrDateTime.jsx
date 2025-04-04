import adicionarTresHorasIsoDate from "./private/adicionarTresHoras";

export default function isoToBrDateTime(dateISO, adicionar3horas = true) {
  try {
    if (dateISO === "" || dateISO === null) return "";

    const dateISOConvertida = adicionar3horas
      ? adicionarTresHorasIsoDate(dateISO)
      : dateISO;

    const date = new Date(dateISOConvertida);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Mês começa do 0
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}h${minutes}`;
  } catch {
    return "";
  }
}
