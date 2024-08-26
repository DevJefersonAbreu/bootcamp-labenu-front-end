const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta-1");
const fruta2 = document.getElementById("fruta-2");
const fruta3 = document.getElementById("fruta-3");

fruta1.textContent = frutas[0];
fruta2.textContent = frutas[1];
fruta3.textContent = frutas[2];



const input = document.getElementById("nova-fruta");

input.addEventListener("input", () => {
  console.log(input.value);
});



const fruta4 = document.getElementById("fruta-4");
const botaoAdicionar = document.getElementById("adicionar-fruta");

botaoAdicionar.addEventListener("click", () => {
  fruta4.textContent = input.value;
  input.value = ""; // Clear the input after adding
});
