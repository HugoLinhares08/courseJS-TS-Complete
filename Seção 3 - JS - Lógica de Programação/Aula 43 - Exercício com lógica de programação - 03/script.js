/**
 * Escreva uma função que recebe um número e retorne o seguinte:
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número NÃO é divisível por 3 e 5 = Retorna o próprio número
 * Checar se é realmente um número
 * Use a função com números de 0 a 100
 */

const num = Math.round(Math.random() * 100)

const fizzBuzz = (num) => isNaN(num) ? 'Não é um número!' : num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz' : num % 3 === 0 ? 'Fizz' : num % 5 === 0 ? 'Buzz' : num

console.log(fizzBuzz(num));