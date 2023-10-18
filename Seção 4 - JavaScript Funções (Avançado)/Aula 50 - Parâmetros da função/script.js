// function funcao() {
//     console.log(arguments); // Arguments sustenta todos os argumentos enviados.
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 'ugo');

// function funcao(a, b = 2, c = 4) { // Valores tipo o b = 2, são valores padrão, ou seja, caso seja
//     // recebido um valor inválido, este será o valor de escape.
//     console.log(a + b + c);
// }
// funcao(2,10,30); // Caso queira pular o 2° parâmetros, o valor deve ser 'undefined'

// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }
// funcao({nome: 'Hugo', sobrenome: 'Linhares', idade: 20})

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}
conta('*', 0, 20, 30, 40, 50)