const d = document;

const inputTarefaElement = d.getElementById('input-nova-tarefa');
const btnAddTarefa = d.querySelector('.btn-add-tarefa');
const tarefasElement = d.querySelector('.tarefas');
const container = d.querySelector('.container');
const inputTarefaValue = inputTarefaElement.value.trim();
const small = container.querySelector('.small');
let numeroTarefas = 0;

let addTarefas = false;

window.onload = function() {
    adicionaTarefasSalvas();
};

inputTarefaElement.addEventListener('keypress', (e) => {
    if(e.keyCode === 13 ){
        criaTarefa(inputTarefaElement.value.trim());
    }
})

btnAddTarefa.addEventListener('click', (e) => {
    criaTarefa(inputTarefaElement.value.trim());
});

function checkTask(tarefa) {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for(let tarefasLista of listaDeTarefas) {
        if (tarefasLista === tarefa) {
            return false
        }
    }
    return true,
    small.className = 'small',
    inputTarefaElement.className = 'input-nova-tarefa'
}

function tarefaValida(tarefa, tarefaExistente) {
    return tarefa !== "" || tarefaExistente ? true : false
}

function criaTarefa(tarefa) {
    try {
        !tarefaValida(inputTarefaElement.value.trim(), addTarefas) 
        ? //Validações caso a tarefa não seja válida
        (() => {
            small.innerHTML = 'Preencha o campo!'          
            small.className = 'small-error'
            inputTarefaElement.className = 'input-nova-tarefa-error'
            throw new Error('A tarefa deve ser válida!');
        })()
        : //Validações caso a tarefa seja válida 
        (() => {
            if (numeroTarefas <= 0) {
                small.className = 'small'
                inputTarefaElement.className = 'input-nova-tarefa'
                const li = criaLi();
                li.innerText = tarefa;
                tarefasElement.appendChild(li);
                criaBotaoApagar(li);
                limpaInput();
                salvarTarefas();
                numeroTarefas++;
                return;
            } 
            if(!checkTask(tarefa) || !tarefaValida(inputTarefaElement.value.trim(), addTarefas) || tarefa === '') {
                return (() => {
                    small.innerHTML = 'Preencha o campo!',
                    small.className = 'small-error',
                    inputTarefaElement.className = 'input-nova-tarefa-error'
                    throw new Error('A tarefa deve ser válida!')
                })()
            }
            small.className = 'small'
            inputTarefaElement.className = 'input-nova-tarefa'
            const li = criaLi();
            li.innerText = tarefa;
            tarefasElement.appendChild(li);
            criaBotaoApagar(li);
            limpaInput();
            salvarTarefas();
            numeroTarefas++;
        })();
    } catch (e) {
        small.innerHTML = (e);
    }
}

function criaLi() {
    const li = d.createElement('li');
    return li
}

function criaBotaoApagar(li) {
    li.innerText += '';
    const botaoApagar = d.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function limpaInput () {
    inputTarefaElement.value = '';
}

function salvarTarefas() {
    const liTarefas = tarefasElement.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

d.addEventListener('click', function(e){
    const el = e.target;
    
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    return tarefas === undefined || tarefas === null ? false
    :
    (() => {
        const listaDeTarefas = JSON.parse(tarefas);
        addTarefas = true;

        for(let tarefa of listaDeTarefas) {
            criaTarefa(tarefa);
            small.className = 'small'
            inputTarefaElement.className = 'input-nova-tarefa'
        }
    })()
}