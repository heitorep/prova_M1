const RoboDeLimpeza = require('../models/RoboDeLimpeza');

describe('RoboDeLimpeza', () => {
    let robo;

    beforeEach(() => {
        robo = new RoboDeLimpeza();
    });

    test('enfileira uma tarefa na filaTarefas', () => {
        robo.adicionarTarefa('polir');
        expect(robo.filaTarefas.itens).toContain('polir');
    });

    test('desenfileira e retorna a próxima tarefa', () => {
        const tarefa = robo.executarProximaTarefa();
        expect(tarefa).toBe('varrer');
        expect(robo.filaTarefas.itens).not.toContain('varrer');
    });
});
