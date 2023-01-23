export class Cliente {
    nome;
    _cpf;

    //O construtor funciona mesmo sem o get.
    get cpf () {
        return this._cpf;
    }

    constructor (nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}