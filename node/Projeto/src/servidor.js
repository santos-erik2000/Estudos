const porta = 3003

const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('./bancaDeDados')

app.use(bodyParse.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})
app.get('/produtos/:id',(req, res) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

app.listen(porta, () =>{
    console.log(`Servidor Executando na porta ${porta}`)
})