//defineProperty (define uma propriedade) - defineProperties (define várias propriedades)
function Produto(nome, preco, estoque) {
  //   this.nome = nome;
  //   this.preco = preco;
  //   this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    values: estoque, // valor da chave
    writable: false, // pode alterar o valor
    configurable: true, // pode reconfigurar a chave
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      values: nome, // valor da chave
      writable: true, // pode alterar o valor
      configurable: true, // pode reconfigurar a chave
    },
    preco: {
      enumerable: true, // mostra a chave
      values: preco, // valor da chave
      writable: true, // pode alterar o valor
      configurable: true, // pode reconfigurar a chave
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));
