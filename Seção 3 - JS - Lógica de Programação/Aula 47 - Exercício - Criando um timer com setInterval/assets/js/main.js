const d = document;

const timer = d.querySelector('.timer');
const iniciar = d.querySelector('.iniciar');
const pausar = d.querySelector('.pausar');
const zerar = d.querySelector('.zerar');

let horas = 0, minutos = 0, segundos = 0, time;
pausar.setAttribute('disabled', '');
zerar.setAttribute('disabled', '');

iniciar.addEventListener('click', function(event) {
    iniciar.innerHTML = 'Iniciar';
    timer.className = 'timer counting';
    zerar.setAttribute('disabled','');
    iniciar.setAttribute('disabled', '');
    pausar.removeAttribute('disabled');

    time = setInterval(() => {
        segundos++;
        minutos += segundos > 60 ? segundos/60 : 0;
        segundos = segundos > 60 ? segundos%60 : segundos;
        horas += minutos > 60 ? minutos/60 : 0;
        minutos = minutos > 60 ? minutos%60 : minutos;
        
        timer.innerHTML = `${zeroAEsquerda(Math.floor(horas))}:${zeroAEsquerda(Math.floor(minutos))}:${zeroAEsquerda(Math.floor(segundos))}`;
    }, 1000);
});

pausar.addEventListener('click', function(event) {
    zerar.removeAttribute('disabled');
    iniciar.removeAttribute('disabled');
    iniciar.innerHTML = 'Continuar';
    timer.className = 'timer paused';
    pausar.setAttribute('disabled', '');

    clearInterval(time);
});

zerar.addEventListener('click', function(event) {
    iniciar.innerHTML = 'Iniciar';
    timer.className = 'timer';
    pausar.setAttribute('disabled', '');
    zerar.setAttribute('disabled', '');
    horas = 0, minutos = 0, segundos = 0;

    timer.innerHTML = `${zeroAEsquerda(Math.floor(horas))}:${zeroAEsquerda(Math.floor(minutos))}:${zeroAEsquerda(Math.floor(segundos))}`;
});

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}