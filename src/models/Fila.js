class Fila {
    constructor() {
        this.itens = [];
    }

    enfileirar(item) {
        this.itens.push(item);
    }

    desenfileirar() {
        if (this.vazia()) {
            throw new Error("Não há tarefas para serem executadas.");
        }
        return this.itens.shift();
    }

    vazia() {
        return this.itens.length === 0;
    }
}




module.exports = Fila;
