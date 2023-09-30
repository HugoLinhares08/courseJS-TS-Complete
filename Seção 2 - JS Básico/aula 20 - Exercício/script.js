function meuEscopo (){
    const form = document.querySelector(`.form`);
    const resultado = document.querySelector(`.resultado`);

    // form.onsubmit = function(evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log(`Foi enviado`);
    // };

    let pessoas = [];
    form.addEventListener('submit', function recebeEvento(evento) {
        evento.preventDefault();
        const nome = document.querySelector(`.nome`);
        const sobrenome = document.querySelector(`.sobrenome`);
        const peso = document.querySelector(`.peso`);
        const altura = document.querySelector(`.altura`);

        pessoas.push(cadastroPessoas(nome.value, sobrenome.value, peso.value, altura.value));
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` +
        ` ${peso.value} ${altura.value} </p>`;
    });

    function cadastroPessoas(nome, sobrenome, peso, altura){
        return {
        nome,
        sobrenome,
        peso,
        altura
        };
    };
};
meuEscopo();