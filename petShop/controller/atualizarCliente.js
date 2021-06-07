import { clienteService } from "../service/cliente-service.js";

(async () => {
  const pegarURL = new URL(window.location);

  const id = pegarURL.searchParams.get("id");

  const inputNome = document.querySelector("[data-nome]");
  const inputEmail = document.querySelector("[data-email]");

  try {
    const dados = await clienteService.detalharCliente(id);
    inputNome.value = dados.nome;
    inputEmail.value = dados.email;
  } catch (erro) {
    console.log(erro);
    window.location.href = "../telas/erro.html";
  }

  const formulario = document.querySelector("[data-form]");

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      await clienteService.atualizarCliente(
        id,
        inputNome.value,
        inputEmail.value
      );
      window.location.href = "../telas/edicao_concluida.html";
    } catch (erro) {
      console.log(erro);
      window.location.href = "../telas/erro.html";
    }
  });
})();
