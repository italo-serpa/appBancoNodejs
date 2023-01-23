import {Cliente} from "./Cliente.js"

export class ContaCorrente {
    static numeroDeContas = 0; //Não será atribuido a cada conta, mas na classe como um todo, permitindo a contagem.
    agencia;
    _cliente;
    _saldo = 0;

    //O assessor setter define a regra de como um atributo pode ou não ser modificado.
    set cliente (novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    //O assessor get existe apenas para retornar um valor e nunca alterá-lo.
    get cliente () {
        return this._cliente;
    }

    get saldo () {
        return this._saldo;
    }

    constructor (agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}