// Declaração de função (Function Hoisting)
falaOi();
function falaOi() {
    console.log('oi')
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('souUmDado');
}

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:');
    funcao();
}

executaFuncao(souUmDado);

// Arrow Function
const arrow = () => {
    console.log('Sou uma arrow function');
}
arrow();

setInterval(() => {
    falaOi(), executaFuncao(), arrow();
}, 1000);