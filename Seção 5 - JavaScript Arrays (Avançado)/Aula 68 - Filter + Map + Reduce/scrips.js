const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
  .filter((values) => values % 2 === 0)
  .map((values) => values * 2)
  .reduce((ac, values) => ac + values);
console.log(numerosPares);
