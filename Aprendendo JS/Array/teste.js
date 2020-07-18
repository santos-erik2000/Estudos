const produtos =[

    {nomes: 'TV', preco: 900, fragil: true},
    {nomes: 'Laptop', preco: 2000, fragil: true},
    {nomes: 'Copo Plastico', preco: 18.99, fragil:false}

]

const clientes = ['Erik', 'Rebeca', 'Emily', 'Glaucia']

const idadeClientes = [19,17,13,43]


clientes.forEach(function(valor, atributo){
    console.log(`${atributo + 1 }) ${valor}`)
})

idadeClientes.map(function(valor, atributo){
    console.log(`${atributo + 1}) ${valor + 5}`)
})

console.log(produtos.filter(function(p){
    return p.preco >= 2000
}))

const soma = (acumulador, valor) => acumulador + valor
console.log(idadeClientes.reduce(soma))

console.log(produtos.map(p => p.preco).reduce(soma))




