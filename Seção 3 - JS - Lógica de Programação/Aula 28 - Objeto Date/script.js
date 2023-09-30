// const data = new Date('20004-09-24 03:04:50');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hor', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Mil', data.getMilliseconds());
// console.log('Dia semana', data.getDay());
// console.log(data.toString());
// console.log(data.toString());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formatDate(data);
console.log(dataBrasil);