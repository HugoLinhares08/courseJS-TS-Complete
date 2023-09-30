// IIFE -> Immediately Invoked function expression
((idade, peso, altura) => {

    const sobrenome = 'linhares'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('ugo'))
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.83);