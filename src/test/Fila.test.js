const Fila = require('../models/Fila');

describe('Fila', () => {
    let fila;

    beforeEach(() => {
        fila = new Fila();
    });

    test('adiciona um item à fila', () => {
        fila.enfileirar('varrer');
        expect(fila.itens).toContain('varrer');
    });

    test('remove e retorna o primeiro item da fila', () => {
        fila.enfileirar('varrer');
        fila.enfileirar('limpar');
        const item = fila.desenfileirar();
        expect(item).toBe('varrer');
        expect(fila.itens).not.toContain('varrer');
    });

});
