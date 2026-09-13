function salvarHabilidades(event) { //Criando um função 
    event.preventDefault(); //Impedindo a página de atualizar após tudo ser preenchido 
    const selecionados = [...document.querySelectorAll('input[type="checkbox"]:checked')] //pega tudo o que for selecionado 
        .map(cb => cb.name); //pegando o nome dos checkboxes selecionados
    const duracao = document.getElementById('duracao').value; //pegando o valor da duração selecionada
    localStorage.setItem('duracao', duracao); //salvando a duração no localStorage
 
  localStorage.setItem('habilidades', JSON.stringify(selecionados)); //salvando as habilidades no localStorage
  window.location.href = 'index.html'; //mandando para a página index.html
}   
 
const habilitados = JSON.parse(localStorage.getItem('habilidades')); //pegando as habilidades salvas no localStorage
 
console.log(habilitados); //mostrando as habilidades no console
 
const tempo = localStorage.getItem('duracao'); //pegando a duração salva no localStorage
 
console.log(tempo); //mostrando o tempo no console
 
const lista = document.getElementById('lista-habilidades'); //pegando o elemento da lista de habilidades
 
const tempoEstudo = document.getElementById('tempo-estudo'); //pegando o elemento que mostra o tempo de estudo
 
tempoEstudo.textContent = `Tempo por dia: ${tempo} minutos`; //mostrando o tempo de estudo na página
 
habilitados.forEach(function(habilidade) { //percorrendo cada habilidade selecionada
    const item = document.createElement('label'); //criando um elemento label
    const checkbox = document.createElement('input'); //criando um elemento input
    checkbox.type = 'checkbox'; //definindo o input como checkbox
    item.appendChild(checkbox); //colocando o checkbox dentro do label
    item.appendChild(document.createTextNode(habilidade)); //colocando o nome da habilidade dentro do label
    lista.appendChild(item); //colocando o label dentro da lista de habilidades
}); //finalizando o forEach
 
const item = document.createElement('input'); //criando um elemento input
 
item.type = 'checkbox'; //definindo o input como checkbox
 
const progresso = document.querySelector('progress'); //pegando o elemento progress da página
 
const tarefas = document.querySelectorAll('#lista-habilidades input'); //pegando todos os inputs dentro da lista de habilidades
 
tarefas.forEach(function(tarefa) { //percorrendo todas as tarefas
    tarefa.addEventListener('change', atualizarProgresso); //criando um evento para atualizar o progresso quando a tarefa for marcada ou desmarcada
}); //finalizando o forEach
 
function atualizarProgresso() { //criando uma função para atualizar o progresso
    const concluidas = document.querySelectorAll('#lista-habilidades input:checked').length; //contando quantas tarefas foram concluídas
    const total = tarefas.length; //contando o total de tarefas
 
    const porcentagem = (concluidas / total) * 100; //calculando a porcentagem de tarefas concluídas
 
    progresso.value = porcentagem; //atualizando a barra de progresso principal
    resumoProgresso.value = porcentagem; //atualizando a barra de progresso do aside
} //finalizando a função atualizarProgresso
 
const resumoTempo = document.getElementById('resumo-tempo'); //pegando o elemento que mostra o tempo no aside
const resumoTarefas = document.getElementById('resumo-tarefas'); //pegando o elemento que mostra as tarefas no aside
const resumoProgresso = document.getElementById('resumo-progresso'); //pegando o elemento progress do aside
 
resumoTempo.textContent = `Tempo: ${tempo} minutos`; //mostrando o tempo no resumo
resumoTarefas.textContent = `Tarefas: ${habilitados.length}`; //mostrando a quantidade de tarefas no resumo
