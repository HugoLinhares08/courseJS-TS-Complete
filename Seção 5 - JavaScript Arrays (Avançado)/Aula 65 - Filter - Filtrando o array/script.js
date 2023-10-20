// FIlter, map, reduce

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const callbackFilter = (valor, indice, array) => {
  return valor > 10;
};

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 5 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// // Callback Function Example
// function greet(name, myFunction) {
//     console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }

// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 2000, 'John', sayName);
