import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Contas/ContaCorrent.js"
import {ContaPoupanca} from "./Contas/ContaPoupanca.js";
import {ContaSalario} from "./Contas/ContaSalario.js";

const cliente1 = new Cliente ("Ricardo", 11122233344);
const cliente2 = new Cliente ("Alice", 55566677788);
const cliente3 = new Cliente ("Caio", 99900011122);

const contaRicardo = new ContaCorrente (cliente1);
const contaAlice = new ContaCorrente (cliente2);
const contaCaio = new ContaCorrente (cliente3);

const contaPoupancaRicardo = new ContaPoupanca (cliente1);

const contaSalarioRicardo = new ContaSalario (cliente1)

contaRicardo.depositar(500);
contaRicardo.sacar(400);
contaPoupancaRicardo.depositar(500);
contaPoupancaRicardo.sacar(400);
contaSalarioRicardo.depositar(500);
contaSalarioRicardo.sacar(400);

console.log(contaRicardo);
console.log(contaPoupancaRicardo);
console.log(contaSalarioRicardo);
console.log("Número de contas correntes ativas: "+ContaCorrente.numeroDeContas)
