//  Operados de Desestruturacao.  tirar elementos do Objeto, Array.

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

const { nome, idade} = pessoa // tire dentro do Objeto (Pessoa) os  atributos(Nome, Idade)

console.log(nome, idade)

const {nome: n, idade: i} = pessoa // Tire, e Troque os nomes das variaveis

const {carro, Bemhumorado = true} = pessoa // Com valores

console.log(carro, Bemhumorado)

//const {logradouro, numero} = pessoa.endereco
//console.log(logradouro, numero)

// ou
const {endereco:{ logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

console.log(pessoa)
