const DeletarTarefa = () => {
    const botaoDeletar = document.createElement('button');
    botaoDeletar.innerText = 'deletar';
    
    botaoDeletar.addEventListener('click', (event) => {
        const deletar = event.target;
        const tarefaDeletar = deletar.parentElement;
        tarefaDeletar.remove();
    })

    return botaoDeletar;
}

export default DeletarTarefa;