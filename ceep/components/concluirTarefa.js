const ConcluirTarefa = () => {
    const botaoConcluir = document.createElement('button');
    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerText = 'concluir';

    botaoConcluir.addEventListener('click', marcarTarefa);

    return botaoConcluir;
}

const marcarTarefa = (event) =>{
    const botaoConcluir = event.target;
    const tarefaCompleta = botaoConcluir.parentElement;

    tarefaCompleta.classList.toggle('done');
}

export default ConcluirTarefa;