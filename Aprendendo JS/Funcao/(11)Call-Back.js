const fabricantes = ['mercedes', 'audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante){
        console.log(fabricante)
})


// passar uma funcao, para outra funcao, e quando uma determinada Situacao acontecer, essa funcao que passou, vai ser disparada, Chamada de volta