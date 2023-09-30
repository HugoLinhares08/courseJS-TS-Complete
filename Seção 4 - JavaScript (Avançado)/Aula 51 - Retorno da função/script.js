// return 
// Retorna um Valor
// Termina a função

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'))

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadruplica(n) {
    return n * 4;
}

console.log(duplica(2))
console.log(triplica(3))
console.log(quadruplica(4))

function somaTripla(n1) {
    return function(n2) {
        return function(n3) {
            return n1 + n2 + n3;
        }
    }
}

const segundoNumero = somaTripla(2);
const terceiroNumero = segundoNumero(2);
console.log(terceiroNumero(2));