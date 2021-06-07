import {clienteService} from '../service/cliente-service.js';

const pegarURL = new URL(window.location);

const id = pegarURL.searchParams.get('id');

const inputNome = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');

clienteService.detalharCliente(id).then(dados => {
    inputNome.value = dados.nome;
    inputEmail.value = dados.email;
})

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    clienteService.atualizarCliente(id, inputNome.value, inputEmail.value).then(() => {
        window.location.href="../telas/edicao_concluida.html";
    });
});