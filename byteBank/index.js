import {Cliente} from "./Cliente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 11122233399);
diretor.cadastrarSenha("12345");
const diretorLogado = SistemaAutenticacao.login(diretor, "12345");
console.log(diretorLogado);

const gerente = new Gerente("Ricardo", 5000, 22233399900);
gerente.cadastrarSenha("54321");
const gerenteLogado = SistemaAutenticacao.login(gerente, "54321");
console.log(gerenteLogado);

const cliente = new Cliente("Lais", 33344455577, "98765");
const clienteLogado = SistemaAutenticacao.login(cliente, "98765");
console.log(clienteLogado);








/* < Pasta Conta > 
import {Cliente} from "./Cliente.js";
//import {Conta} from "./Conta/Conta.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001); 
contaPoupanca.sacar(10);

//const conta = new Conta(0, cliente1, 1001); //Não é permitido instanciar um objeto do tipo conta

console.log(contaPoupanca);
console.log(contaCorrenteRicardo); */
