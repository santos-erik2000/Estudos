const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7: case 6:
            console.log('Aprovado')
            break
        case 5: case 4: case 3:
            console.log('Recuperacao')
            break
        case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('nota Invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(2.9)