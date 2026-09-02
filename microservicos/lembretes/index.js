const express = require('express')
const app = express()
const lembretes = {}
//middleware
app.use(express.json())
let id = 1
//API: Application programming interface: colecao de endpoints

//Criar um lembrete
//POST criar algo
//endpoint: uma tripla - metodo do protocolo http, padrao de acesso e funcionalidade
app.post("/lembretes", (req, res) => {
    const texto = req.body.texto
    lembretes[id] = {
        id: id,
        texto: texto
    }
    id++
    res.json({mensagem: 'ok'})
})
app.get("/lembretes", function(req, res) {
      res.json(lembretes)  
})
const port = 4000
app.listen(4000, () => console.log(`Lembretes. ${port}.`))