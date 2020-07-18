const client = new Object

client.nome = "Rebeca"
client['idade'] = '17'
client.tamanho = 202

console.log(client)

delete client.nome

console.log(client)

//////////////////////////////////

const carro = {
    modelo: ' A4',
    valor: 90000,
    proprietario:{
        nome: 'Erik',
        idade:19,
        endereco: {
            rua: 'Albert',
            numero:123
        }
    },
    motorista: {
        nome:'Rebeca',
        idade:17
    },
    
}
