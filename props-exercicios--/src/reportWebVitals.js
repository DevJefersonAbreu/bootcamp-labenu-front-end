// src/reportWebVitals.js
// Função para logar ou enviar dados de web vitals para um endpoint de análise
export default function reportWebVitals(onPerfEntry) {
  // Aqui você pode adicionar a lógica para enviar ou registrar dados
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Passa a função de callback para a lógica de web vitals
    onPerfEntry();
  }
}
