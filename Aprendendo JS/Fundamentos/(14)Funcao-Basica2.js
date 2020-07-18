// armazenar uma funcao na Variavel, const (Funcao anonima, nao precisando de nome, pois o nome ja esta na variavel)
const imprimirSoma = function (a,b) {
    console.log(a*b)
}

imprimirSoma(2, 3)

// armazenando uma funcao arrow na variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(10,10))


//retorno Implicito, Uma unica (sentenca de codigo)
const sub = (a,b) => a - b
console.log(sub(3,9))

const imprimirFala = a=> console.log(a)
imprimirFala('Eu amo a Rebeca!! ')