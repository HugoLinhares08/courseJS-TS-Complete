// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b,c,a];
// [a,b,c] = letras;

// console.log(a,b,c)

const numeross = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [primeiroNumero, segundoNumero,terceiroNumero, ...rest] = numeross;
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(rest);

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [list1, list2, list3] = numeros;
console.log(list3[2]);