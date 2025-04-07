export default function isoToDate(isoDate) {
  if (isoDate !== "" && isoDate !== null) return new Date(isoDate);

  return null;
}
