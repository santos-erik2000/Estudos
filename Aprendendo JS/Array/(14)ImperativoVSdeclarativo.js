const alunos = [
    {nome: 'Erik', nota: 9.0},
    {nome: 'Rebeca',nota: 7.0}
]

// Imperativo
let totalNota = 0
for(let i = 0; i < alunos.length ; i++){
    totalNota += alunos[i].nota
}

console.log(totalNota / alunos.length)

//Declarativo (Mais Indicado)
const pegarAluno = n => n.nota
const soma = (acumulador, atual) => acumulador + atual
const notaMedia = alunos.map(pegarAluno).reduce(soma) 
console.log(notaMedia / alunos.length)