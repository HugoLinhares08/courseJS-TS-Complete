// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce((acumulador, valor, indice, array) => {
//   acumulador += valor;
//   return acumulador;
// }, 0);
// console.log(total);
// const totalPar = numeros.reduce((acumulador, valor, indice, array) => {
//   if (valor % 2 === 0) acumulador.push(valor);
//   return acumulador;
// }, []);
// console.log(totalPar);
// const totalPar = numeros.reduce((acumulador, valor, indice, array) => {
//   acumulador.push(valor * 2)
//   return acumulador;
// }, []);
// console.log(totalDobro);

// Retorne a pessoa mais velha
const pessoas = [
  { nome: "Luiz", idade: 672 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 64 },
  { nome: "Wallace", idade: 47 },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
});
console.log(maisVelha);
