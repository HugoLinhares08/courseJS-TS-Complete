const nome = 'Hugo';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'ugo';
    falaNome();
}

usaFalaNome();