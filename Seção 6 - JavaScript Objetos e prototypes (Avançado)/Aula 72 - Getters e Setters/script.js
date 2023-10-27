// defineProperty -> Getters e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: true, // pode reconfigurar a chave
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        console.log("Bad Value");
        return;
      }

      estoque = valor;
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
console.log(p1.estoque);
p1.estoque = "O valor que eu quero";
