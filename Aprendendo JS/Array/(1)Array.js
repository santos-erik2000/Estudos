console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Erik', 'Rebeca','Ana')

console.log(aprovados)

aprovados = ['lucas', 'fernando', 'emilly']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Pablo'
aprovados.push('Santos') // Metodo para adicionar um novo elemento no array

console.log(aprovados.length) // ira ver quantos elementos possui esse array

aprovados[20] = 'Caio'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[15] === undefined)


Array.prototype.add = function(){
    this.push('Fernanda')
}

let convidados = ['Erik', 'Rebeca', 'Ana']

convidados.add()
aprovados.sort() // ira deixar em ordem alfabetica

console.log(aprovados)
console.log(convidados)


delete aprovados[1]

console.log(aprovados[1])

let pessoas = ['maria', 'Victor','ana', 'Matheus']

pessoas.splice(1, 2, 'elementos1', 'elemento2') // pode adicionar elemento em um indice expecifico... iria comecar excluir do indice 1, e iria excluir somente 1 indice
console.log(pessoas)