//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1);
// console.log(nomes, removidos );

// const removidos = nomes.splice(-2, Number.MAX_VALUE); //Remove TODOS a partir do -2
// console.log(nomes, removidos);

// const removidos = nomes.splice(3, 0, 'Hugo') // Hugo será adicionado no índice 3, e nada será removido, ou seja, o índice 3 passará a ser o 4
// console.log(nomes, removidos);

// shift
// const removidos = nomes.splice(0, 1);

// push 
// nomes.splice(nomes.length, 0, 'Hugo', 'Linhares', 'Lage', 'Gonçalves');

// unshift
// nomes.splice(0, 0, 'Hugo', 'Linhares', 'Lage', 'Gonçalves');