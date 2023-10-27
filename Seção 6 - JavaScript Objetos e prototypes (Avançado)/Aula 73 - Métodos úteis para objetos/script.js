/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'Prop')
 * ... (spread)
 *
 * Já foi visto:
 * Object.keys (Retorna as chaves)
 * Object.freeze (Congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
 */

const produto = {
  nome: "Caneca",
  preco: 1.8,
};

// const outraCoisa = produto;
// produto.nome = 'Hugo Linhares';
// console.log(outraCoisa); // Desta forma, 'outraCoisa' é uma cópia de 'produto', caso necessite de valores diferentes, é necessário a utilização do spread operator em 'outraCoisa'

/**
 *
 *
 *
 */

// console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

// Object.defineProperty(produto, "nome", {
//   writable: false,
//   configurable: false,
//   // valor: 'Qualquer outra coisa'
// });
// delete produto.nome;
// delete produto.preco;
// console.log(produto);

/**
 *
 *
 *
 */

console.log(Object.values(produto), Object.entries(produto));

for (let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}
