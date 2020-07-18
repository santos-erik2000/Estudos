const jogadores = ['Neymar', 'CR7','Messi','Coutinho']
jogadores.pop()
console.log(jogadores)

jogadores.push('Pele')
console.log(jogadores)

jogadores.shift()
console.log(jogadores)

jogadores.unshift('Rogerio Sene')
console.log(jogadores)
// adicionando
jogadores.splice(1, 0 ,'Iniesta', 'Daniel Alves')
console.log(jogadores)
//removendo
jogadores.splice(1,2)
console.log(jogadores)


const melhoresJogadores = jogadores.slice(1)
console.log(melhoresJogadores, jogadores)