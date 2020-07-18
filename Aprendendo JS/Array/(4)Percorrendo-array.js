const aprovados = ['Erik', 'Rebeca','Osvaldo','Emilly']

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})

const listaAprovados = (indice,aprovados) => console.log(`${aprovados + 1}${indice}`)
aprovados.forEach(listaAprovados)

