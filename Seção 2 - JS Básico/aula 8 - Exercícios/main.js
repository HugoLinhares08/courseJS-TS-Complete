// Atividade para mostrar o nome e o IMC (Índice de Massa Corporal)

const nome = `Hugo`
const sobrenome = `Linhares`
const idade = 18
const peso = 107
const altura = 1.82
const anoAtual = 2023
let imc // peso / (altura * altura)
let anoNascimento

anoNascimento = anoAtual - idade
imc = peso / (altura * altura)

console.log(`Ano de nascimento de ${nome +' '+ sobrenome}: ${anoNascimento} (Aproximadamente)`)
console.log(`Idade: ${idade}, peso: ${peso}, altura: ${altura} \nIMC atual: ${imc}`)
