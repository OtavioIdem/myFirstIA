export default function dateToIso(date) {
  if (date !== "" && date !== null && date !== "Invalid Date")
    return date.toISOString();

  return null;
}
