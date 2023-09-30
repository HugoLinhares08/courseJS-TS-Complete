const data = new Date();
const diaSemana = data.getDay();

function getDiaSemanaTexto(diaSemana){
    switch (diaSemana) {
        case 0:
            diaSemana = 'Domingo';
            break;
        case 1:
            diaSemana = 'Segunda';
            break;
        case 2:
            diaSemana = 'Terça';
            break;
        case 3:
            diaSemana = 'Quarta';
            break;
        case 4:
            diaSemana = 'Quinta';
            break;
        case 5:
            diaSemana = 'Sexta';
            break;
        case 6:
            diaSemana = 'Sábado'
            break;

        default:
            diaSemana = 'Dia da semana Inexistente!';
    }
    return diaSemana;
}

console.log(getDiaSemanaTexto(diaSemana));

// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado'
// }


console.log(diaSemana)