const listarCliente = () => {
    return fetch(`http://localhost:3000/profile`).then(resposta => { // get padrão
        if(resposta.ok){
            return resposta.json();
        }    
        throw new Error('Erro comunicação com o servidor')
    
    
    });
};

const criarCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`,{
        method:'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    }).then(resposta => {
        if (resposta.ok){
            return resposta.body;
        }
        throw new Error('Erro comunicação com o servidor');
    })
}

const removerCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    }).then(resposta => {
        if(!resposta.ok){
            throw new Error('Erro comunicação com o servidor.');
        }
    });
}

const detalharCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`).then(resposta => { 
        if(resposta.ok){
            return resposta.json();
        }    
        throw new Error('Erro comunicação com o servidor.');
    });
}

const atualizarCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
    }).then(resposta => {
        if (resposta.ok){
            return resposta.json();
        }
        throw new Error('Erro comunicação com o servidor.');
    })
}

export const clienteService = {
    listarCliente,
    criarCliente,
    removerCliente,
    detalharCliente,
    atualizarCliente
};