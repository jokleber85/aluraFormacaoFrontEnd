export class Conta{ // Classe Abstrata
    constructor(saldoInicial, cliente, agencia){
        if (this.constructor == Conta){
            throw new Error("Você não deve instaciar um objeto do tipo conta diretamente!!!");
        }

        this._saldo = saldoInicial; // #saldoInicial = 0 https://github.com/tc39/proposal-class-fields#private-fields
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){ //Método abstrato
    /*  let taxa = 1;
        return this._sacar(valor, taxa);*/
        throw new Error("O método da conta é abstrato");  
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){ 
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}