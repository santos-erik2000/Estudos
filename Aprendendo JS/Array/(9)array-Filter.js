const produtos = [
    {nome: 'Laptop', preco: 2499, fragil: true},
    {nome: ' IpadPRO', preco: 4199, fragil:false},
    {nome: 'Copo de plastico',preco: 19.99, fragil: false}

]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))