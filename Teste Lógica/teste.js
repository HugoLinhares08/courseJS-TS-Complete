let segundos = 119, minutos = 0;

console.log('sim');

if (segundos > 60) {
    minutos = segundos/60;
    segundos = segundos%60;
}

console.log(Math.floor(minutos), segundos)