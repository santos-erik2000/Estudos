Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i=0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    {nome: 'Laptop', preco: 2499, fragil: true},
    {nome: ' IpadPRO', preco: 4199, fragil:false},
    {nome: 'Copo de plastico',preco: 19.99, fragil: false}

]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil)) 