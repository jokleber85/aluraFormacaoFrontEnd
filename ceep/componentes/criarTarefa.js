import { carregarTarefa } from "./carregarTarefa.js";
import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefa.js";

export const handleNovoItem = (evento) => {
  evento.preventDefault();

  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

  const input = document.querySelector("[data-form-input]");
  const valor = input.value;

  const calendario = document.querySelector("[data-form-date]");
  const data = moment(calendario.value);
  const horario = data.format('HH:mm');
  const dataFormatada = data.format("DD/MM/YYYY");
  let tarefaConcluida = false;

  const dados = {
      valor,
      dataFormatada,
      horario,
      tarefaConcluida
  }

  const tarefasAtualizadas = [... tarefas, dados];

  localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas)); // dados não expiram ao fim da sessão

  input.value = " ";

  carregarTarefa();
};

export const Tarefa = ({valor, horario, tarefaConcluida}, id) => {

  const tarefa = document.createElement("li");
  const conteudo = `<p class="content">${horario} * ${valor}</p>`;

  if(tarefaConcluida){
    tarefa.classList.add("done");
  }

  tarefa.classList.add("task");
  tarefa.innerHTML = conteudo;
  tarefa.appendChild(BotaoConclui(carregarTarefa, id));
  tarefa.appendChild(BotaoDeleta(carregarTarefa, id));

  return tarefa;

};