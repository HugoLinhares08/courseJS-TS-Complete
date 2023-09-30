const d = document;
const result = d.querySelector(`h1`);

function pullDate() {
    //Puxando a data atual do sistema
    var actualDate = new Date();

    //Arrays para puxar as strings de dia da semana e mês
    let diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    //Puxando/Transformando os números e funções em dias, semanas, meses, anos.
    let diaSemana = diasSemana[actualDate.getDay()]
    let dia = actualDate.getDate();
    let mes = meses[actualDate.getMonth()];
    let ano = actualDate.getFullYear();
    let horario = `${zeroAEsquerda(actualDate.getHours())}` + `:${zeroAEsquerda(actualDate.getMinutes())}` + `:${zeroAEsquerda(actualDate.getSeconds())}`;

    result.innerHTML = `${diaSemana}, ${dia}, de ${mes} de ${ano} <br>
    ${horario}
    `;
}

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

pullDate();