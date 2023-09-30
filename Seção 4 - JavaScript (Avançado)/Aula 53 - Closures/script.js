function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('ugo');
const funcao2 = retornaFuncao('Linhares');
console.log(funcao);
console.log(funcao2);
console.log(funcao(), funcao2());