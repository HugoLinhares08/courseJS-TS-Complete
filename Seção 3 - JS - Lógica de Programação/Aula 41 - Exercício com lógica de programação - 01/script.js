// Escreva uma função que recebe 2 números e retorne o maior deles.

let a = Math.floor(Math.random() * 10), b = Math.floor(Math.random() * 10);

function biggestNumber(num1, num2) {
    const biggest = num1 === num2 ? console.log('números iguais') : num1 > num2 ? console.log(`O maior número é o 1°; ${num1}`) : console.log(`O maior número é o 2°; ${num2}`)
    return biggest;
}
biggestNumber(a,b);