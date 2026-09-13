function salvarHabilidades(event) {
    event.preventDefault();
    const selecionados = [...document.querySelectorAll('input[type="checkbox"]:checked')]
        .map(cb => cb.name);
    const duracao = document.getElementById('duracao').value;
    localStorage.setItem('duracao', duracao);

  localStorage.setItem('habilidades', JSON.stringify(selecionados));
  window.location.href = 'index.html';
}   

const habilitados = JSON.parse(localStorage.getItem('habilidades'));
console.log(habilitados);

const tempo = localStorage.getItem('duracao');
console.log(tempo);

const lista = document.getElementById('lista-habilidades');

const tempoEstudo = document.getElementById('tempo-estudo');

tempoEstudo.textContent = `Tempo por dia: ${tempo} minutos`;

habilitados.forEach(function(habilidade) {
    const item = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    item.appendChild(checkbox);
    item.appendChild(document.createTextNode(habilidade));
    lista.appendChild(item);
});

const item = document.createElement('input');
item.type = 'checkbox';

const progresso = document.querySelector('progress');

const tarefas = document.querySelectorAll('#lista-habilidades input');

tarefas.forEach(function(tarefa) {
    tarefa.addEventListener('change', atualizarProgresso);
});

function atualizarProgresso() {
    const concluidas = document.querySelectorAll('#lista-habilidades input:checked').length;
    const total = tarefas.length;

    progresso.value = (concluidas / total) * 100;
}

const resumoTempo = document.getElementById('resumo-tempo');
const resumoTarefas = document.getElementById('resumo-tarefas');
const resumoProgresso = document.getElementById('resumo-progresso');

resumoTempo.textContent = `Tempo: ${tempo} minutos`;
resumoTarefas.textContent = `Tarefas: ${habilitados.length}`;
resumoProgresso.textContent = `Progresso: ${progresso.value}%`;
