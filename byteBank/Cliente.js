export class Cliente {
    nome;
    _cpf;

    get cpf(){
       return this._cpf;
    }

    constructor(nome, cpf){ // atributo não poderá ser mais alterado
        this.nome = nome;
        this._cpf = cpf;
    }
}

