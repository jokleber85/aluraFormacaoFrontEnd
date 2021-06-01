//JavaScript IIFE (encapsular o código dentro de uma função anônima, evitando acesso as regras de negócio)
import ConcluirTarefa from './components/concluirTarefa.js';
import DeletarTarefa from './components/deletarTarefa.js';

    const criarTarefa = (event) =>{
        event.preventDefault();
    /*  const input = document.querySelector('[data-form-input]');
        const valor = input.value;
        
        const tarefa = document.querySelector('[data-task]');
        const conteudo = `<p class="content">${valor}</p`;

        tarefa.innerHTML = conteudo;

        input.value = ""; */

        const input = document.querySelector('[data-form-input]');
        const valor = input.value;

        const lista = document.querySelector('[data-list]');
        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        const conteudo = `<p class="content">${valor}</p`;
        
        tarefa.innerHTML = conteudo;

        tarefa.appendChild(ConcluirTarefa());
        tarefa.appendChild(DeletarTarefa());
        
        lista.appendChild(tarefa); 
        
        input.value = ""; 
    } 

    const novaTarefa = document.querySelector('[data-form-button]');
    novaTarefa.addEventListener('click', criarTarefa);