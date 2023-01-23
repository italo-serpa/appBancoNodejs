import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    constructor (cliente) {
        super(0, cliente, 1001)
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        let taxa = 1.03;
        return this._sacar(valor, taxa);
    }
}