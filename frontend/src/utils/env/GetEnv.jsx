import Exception from "../../exception/Exception";

export default function getEnv(key) {
  const value = import.meta.env[`VITE_${key}`];

  if (value === undefined) {
    throw new Exception(
      "ENV2025",
      `A chave informada ao getEnv, ${key}, não existe no arquivo env`
    );
  }

  return value;
}
