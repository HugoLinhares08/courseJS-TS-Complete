// const pessoa = {
//     nome: 'Hugo',
//     sobrenome: 'Linhares'
// }

// const chave = 'nome'
// console.log(pessoa[chaveh])

const pessoa1 = new Object();

pessoa1.nome = "Hugo";
pessoa1.sobrenome = "Linhares";
// delete pessoa1.nome;
// console.log(pessoa1)

// pessoa1.falarNome = function () {
//   console.log(`${this.nome} está falando seu nome.`);
// };

// pessoa1.falarNome();

// pessoa1.idade = 19;
// pessoa1.getDataNascimento = function () {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };

// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) {
//   console.log(chave);
//   console.log(pessoa1[chave]);
// }

// Factory functions / Constructor functions / Classes
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     }
// }

// const p1 = criaPessoa('Hugo', 'Linhares');
// console.log(p1.nomeCompleto);

function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this); / Desta forma, só será possível manipular os objetos dentro do método PESSOA, caso seja menipulado por fora, retornará um erro
}

//new cria um {} (objeto vazio) <- this
const p1 = new Pessoa('Hugo', 'Linhares');
const p2 = new Pessoa('Gabriel', 'Linhares');
p1.nome = 'Lucas'
console.log(p1);
console.log(p2);

Object.freeze(p1);
p1.nome = 'Hugo'
console.log(p1);
