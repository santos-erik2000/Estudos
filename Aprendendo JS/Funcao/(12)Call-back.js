const notas = [6, 8, 9, 0, 4, 6, 7, 8, 4 ,5,3 ,6 ,  ]

// sem calback

let notasBaixas1 = []

for (i in notas){
    if([i] < 7){
        notasBaixas1.push(notas[i]) // puxando o array
    }
}

console.log(notasBaixas1)

// com callback

const somenteNotasBaixas = notas=> notas < 7

const somar = (acumulator, notaAtual) => acumulator + notaAtual

notasBaixas1 = notas.filter(somenteNotasBaixas).reduce(somar)

console.log(notasBaixas1)
