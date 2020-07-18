const notas = [8, 9, 0, 10, 7.9]

for(i in notas){
    console.log(i, notas[i])
}


const pessoa = {
    nome: 'ANA',
    sobrenome: 'Santos',
    idade: 29,
    peso: 64

}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}