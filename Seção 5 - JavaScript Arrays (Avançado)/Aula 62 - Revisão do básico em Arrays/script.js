//                    0         1        2          3         4
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Fernanda', 'Bruno'] // Array literal
const nomes = new Array('Eduardo', 'Maria', 'Joana', 'Fernanda', 'Bruno');
// nomes[2] = João
// console.log(nomes);
// delete nomes[2]
// console.log(nomes);

// const novo = nomes; // Ao alterar o 'novo', 'nomes' será alterado da mesma forma.
// novo.pop();
// console.log(nomes);

// const novo = [...nomes]; // Desta forma, 'nomes' permanece inalterado.
// novo.pop();
// console.log(nomes);

// const removido = nomes.pop();
// console.log(nomes, removido);

// nomes.push('Pedro');
// console.log(nomes);

// let novo = nomes.slice(1, 3);
// console.log(novo);
// novo = nomes.slice(-1, 3);
// console.log(novo);
// novo = nomes.slice(1, -2);
// console.log(novo);

// const nome = 'Hugo Linhares Lage Gonçalves';
// const nomesSeparados = nome.split(' ');
// const nomesSeparados = nome.split(',');
// console.log(nomesSeparados);

const nomesSeparados = ['Hugo', 'Linhares', 'Lage', 'Gonçalves'];
const nome = nomesSeparados.join(' ')
console.log(nomesSeparados, nome);
