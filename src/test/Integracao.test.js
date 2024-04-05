const RoboDeLimpeza = require('../models/RoboDeLimpeza');
const Fila = require('../models/Fila');

describe('Integração entre RoboDeLimpeza e Fila', () => {
    it('deve executar todas as tarefas corretamente', async () => {
        const robo = new RoboDeLimpeza();

        let tarefasExecutadas = [];
        while (!robo.filaTarefas.vazia()) {
            let tarefa = robo.executarProximaTarefa();
            tarefasExecutadas.push(tarefa);
        }

        expect(tarefasExecutadas).toEqual(['varrer', 'limpar', 'lustrar']);
        console.log('Todas as tarefas foram executadas:', tarefasExecutadas);

        if (tarefasExecutadas.length > 0) {
            console.log('Abrindo endpoint /executar_todas_tarefas...');
 
            console.log(tarefasExecutadas);
        }
    });
});
