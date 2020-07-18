const Carro = {modelo: 'A4'}
Carro.modelo = '50A'

Object.freeze(Carro)

delete Carro.modelo
console.log(Carro)




