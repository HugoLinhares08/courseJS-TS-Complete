const pessoa = {
  nome: "Hugo",
  sobrenome: "Linhares",
  idade: 30,
  endereco: {
    rua: "av Brasil",
    numero: 320,
  },
};

// Atribuição via desestruturação
// const { nome = 'Caso não haja nada no objeto pessoa, esta mensagem será apresentada', sobrenome } = pessoa;
// console.log(nome, sobrenome)

const {
  endereco: { rua, numero },
} = pessoa;
console.log(rua, numero);
