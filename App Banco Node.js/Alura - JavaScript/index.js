import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrent.js"

const cliente1 = new Cliente ("Ricardo", 11122233344);

const cliente2 = new Cliente ("Alice", 55566677788);

const contaRicardo = new ContaCorrente (1001, cliente1);

const contaAlice = new ContaCorrente (1001, cliente2);

contaRicardo.depositar(500);
contaRicardo.transferir(480, contaAlice);
contaAlice.sacar(80)

console.log(contaRicardo);
console.log(contaAlice);
console.log(ContaCorrente.numeroDeContas);