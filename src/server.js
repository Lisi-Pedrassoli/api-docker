const express = require('express');
const app = express();

app.use(express.json()); 

let sorvetes = [];
let id = 1;


app.get('/sorvetes', (req, res) => {
    res.json(sorvetes);
});

app.post('/sorvetes', (req, res) => {
    const { nome } = req.body;
    const { sabor } = req.body;

    const novoServete = { id: id++, nome, sabor };
    sorvetes.push(novoServete);
    
    res.status(201).json(novoServete);
});

app.listen(3000, () =>{
    console.log("Rodando na Porta 3000")
})