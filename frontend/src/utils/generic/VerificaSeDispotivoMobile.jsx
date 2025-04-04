export default function verificaSeDispositivoMobile() {
  // Usa o agente do usuário para identificar o tipo de dispositivo
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Verifica se o agente corresponde a dispositivos móveis
  const isMobileDevice =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    );

  return isMobileDevice;
}
