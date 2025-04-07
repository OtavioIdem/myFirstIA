export default function toJson(value) {
  if (value !== "" && value !== undefined && value !== null)
    return JSON.parse(value);

  return null;
}
