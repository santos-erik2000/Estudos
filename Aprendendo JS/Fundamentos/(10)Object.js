const prod1 = {}
prod1.nome = 'celular Ultra Mega'
prod1.preco = 4998.90
console.log(prod1)


const prod2 = {
    tipo: {
        nome: 'polo',
        nome2: 'adidas',
        nome3: 'Nike',
        nike: {
            camisa: 'branca' ,
            preco: 90 
        }
    } ,
   preco: 79.90 ,
}



console.log(prod2.tipo.nike)