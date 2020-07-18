//Object.preventExtensions (Evitar adicionar o Numero de Atributos do Objeto)

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 2000, tag:'Promocao'
})
// Object.isExtencible (Ira verificar se um atributo pode ser adicionado)
console.log('Extencao:', Object.isExtensible(produto)) 

produto.nome = 'Borracha'
produto.promocao = 'Venha agr'
delete produto.tag
console.log(produto)

// Object.seal (selar, Nao consigo, Adicionar, excluir, mas sim modificar os Valores dos Atributos)

const pessoa = Object.seal({
    nome:' Erik',
    idade: 50

})
// Verificando se esta selado
console.log('Selado', Object.isSealed(pessoa))

pessoa.nome = 'rebeca'
pessoa.corCabeo = 'Preto'
delete pessoa.idade

console.log(pessoa)