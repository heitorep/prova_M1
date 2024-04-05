const express = require('express');
const app = express();

app.get('/executar_todas_tarefas', (req, res) => {
    res.json([{ mensagem: 'Todas as tarefas foram executadas'}]);
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log(`Servidor rodando em http://localhost:3000`);
    });
}

module.exports = app;
