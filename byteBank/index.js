import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente("Ricardo", 11122233309);
//cliente1.nome = "Ricardo";
//cliente1.cpf = 11122233309;

const cliente2 = new Cliente("Alice", 88822233309);
//cliente2.nome = "Alice";
//cliente2.cpf = 88822233309;

console.log(cliente1);
console.log(cliente2);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
/* Após o constructor, não sera mais atribuido dessa forma 
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.agencia = 1001; */
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.depositar(500);

const valorSacado = contaCorrenteRicardo.sacar(50); 
console.log(`Valor Sacado: ${valorSacado}`);

console.log(contaCorrenteRicardo);

const contaCorrenteAlice = new ContaCorrente(2002, cliente2);
/* Após o constructor, não sera mais atribuido dessa forma
contaCorrenteAlice.cliente = cliente2;
contaCorrenteAlice.agencia = 2002; */
contaCorrenteAlice._saldo = 0;
console.log(contaCorrenteAlice);

contaCorrenteRicardo.tranferir(200, contaCorrenteAlice);
console.log(contaCorrenteRicardo);
console.log(ContaCorrente.numeroContas); 

/*Função Depositar
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200); 
console.log(contaCorrenteRicardo.saldo);*/

/*Função Sacar
contaCorrenteRicardo.saldo += 100;
contaCorrenteRicardo.sacar(50); 
console.log(contaCorrenteRicardo.saldo);*/

