const Fila = require("../models/Fila");

class RoboDeLimpeza {
  constructor() {
    this.filaTarefas = new Fila();

    this.adicionarTarefa("varrer");
    this.adicionarTarefa("limpar");
    this.adicionarTarefa("lustrar");
  }

  adicionarTarefa(tarefa) {
    this.filaTarefas.enfileirar(tarefa);
  }

  executarProximaTarefa() {
    if (this.filaTarefas.vazia()) {
      throw new Error("A fila de tarefas está vazia.");
    }

    const tarefa = this.filaTarefas.desenfileirar();
    console.log(`Realizando tarefa: ${tarefa}`);
    return tarefa;
  }
}

module.exports = RoboDeLimpeza;
