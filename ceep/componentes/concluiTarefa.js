const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));

    tarefasCadastradas[id].tarefaConcluida = !tarefasCadastradas[id].tarefaConcluida;

    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));

    atualiza();
}

const BotaoConclui = (atualiza, id) => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id))

    return botaoConclui

}

export default BotaoConclui

