const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Erik', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota:8.7, bolsista: true}
]




console.log(alunos.map(b => b.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual
}))

console.log(alunos.filter(function(e){
    return e.bolsista == true
}))


   





