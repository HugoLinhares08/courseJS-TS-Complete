// Dobre os números
//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map((valor, indice, array) => {
//   console.log(valor, indice, array);
//   return `Hugo -> ${valor * 2}`;
// });

// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma strings com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// const onlyName = pessoas.map((valor, indice, array) => {
//   return `Nome: ${valor.nome}`;
// });
// console.log(onlyName);

// const idades = pessoas.map((valor, indice) => {
//   return { idade: valor.idade };
// });
// console.log(idades);

const idKey = pessoas.map((valor, indice) => {
  const newObj = { ...valor };
  newObj.id = indice;
  return newObj;
});
idKey.forEach((element) => {
  console.log(element);
});
