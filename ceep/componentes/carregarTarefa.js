import { ordenaDatas, removeDatasRepetidas } from "../services/data.js";
import { criarData } from "./criarData.js";

export const carregarTarefa = () => {
    const lista = document.querySelector('[data-list]');

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

    lista.innerHTML = " ";

    const datasUnicas = removeDatasRepetidas(tarefasCadastradas);

    ordenaDatas(datasUnicas);
    console.log(datasUnicas);

    datasUnicas.forEach((dia) => {
        lista.appendChild(criarData(dia));
    });
}