const sequence = {
    _id: 1,
    get id(){return this.id++}
}

const produto = {}

function criarProduto(produto){
    if (!produto.id) produto.id = sequence.id
    produto[produto.id] = produto
    return produto
}

function getProduto(id){
    return produto[id] || {}
}

function getProdutos(){
    return Object.values(produto)
}

module.exports = (criarProduto, getProduto, getProdutos)