const adicionarTresHorasIsoDate = (dataIso) => {
  // Converte a string ISO para um objeto Date
  let data = new Date(dataIso);

  // Adiciona 3 horas (3 * 60 * 60 * 1000 milissegundos)
  data.setTime(data.getTime() + 3 * 60 * 60 * 1000);

  // Converte de volta para o formato ISO
  return data.toISOString();
};

export default adicionarTresHorasIsoDate;
