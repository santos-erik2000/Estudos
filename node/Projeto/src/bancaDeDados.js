const sequence = {
    _id: 1,
    get id () {return this._id++}
}

const produtos = {}

function salvarProduto(produtos){
    if(!produtos.id) produtos.id = sequence.id
    produtos[produtos.id] = produtos
    return produtos
}

function getProdutos(id){
    return produtos[id] || {}
}

function getProduto(){
    return Object.values(produtos)
}

module.exports = {salvarProduto, getProduto, getProdutos}