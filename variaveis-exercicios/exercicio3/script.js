// a) Nome completo
const nomeCompleto = prompt("Digite seu nome completo:");

// b) Data de nascimento (utilize as / )
const dataNascimento = prompt("Digite sua data de nascimento (dd/mm/aaaa):");

// c) Endereço
const endereco = prompt("Digite seu endereço:");

// d) CPF
const cpf = prompt("Digite seu CPF:");

// e) Escolaridade
const escolaridade = prompt("Digite sua escolaridade:");

// f) Possui CHN?
const possuiCHN = prompt("Você possui CHN? (Sim ou Não):");

// g) Quantos filhes possui?
const quantosFilhos = Number(prompt("Quantos filhos você possui?"));

// h) Cargo atual
const cargoAtual = prompt("Qual é o seu cargo atual?");

// i) Salário
const salario = Number(prompt("Qual é o seu salário?"));

// j) Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel
const recebeComissao = confirm("Você recebe comissão?");

// k) Informe o ano de admissão
const anoAdmissao = Number(prompt("Informe o ano de admissão:"));

// Imprima no console o tipo de todas as variáveis
console.log("Tipos das variáveis:");
console.log("nomeCompleto:", typeof nomeCompleto);
console.log("dataNascimento:", typeof dataNascimento);
console.log("endereco:", typeof endereco);
console.log("cpf:", typeof cpf);
console.log("escolaridade:", typeof escolaridade);
console.log("possuiCHN:", typeof possuiCHN);
console.log("quantosFilhos:", typeof quantosFilhos);
console.log("cargoAtual:", typeof cargoAtual);
console.log("salario:", typeof salario);
console.log("recebeComissao:", typeof recebeComissao);
console.log("anoAdmissao:", typeof anoAdmissao);

// Imprima no console um relatório da pessoa colaboradora
console.log("\nRelatório da pessoa colaboradora:");
console.log("Nome completo:", nomeCompleto);
console.log("Data de nascimento:", dataNascimento);
console.log("Endereço:", endereco);
console.log("CPF:", cpf);
console.log("Escolaridade:", escolaridade);
console.log("Possui CHN:", possuiCHN);
console.log("Quantos filhos possui:", quantosFilhos);
console.log("Cargo atual:", cargoAtual);
console.log("Salário:", salario);
console.log("Recebe comissão:", recebeComissao ? "Sim" : "Não");
console.log("Ano de admissão:", anoAdmissao);
