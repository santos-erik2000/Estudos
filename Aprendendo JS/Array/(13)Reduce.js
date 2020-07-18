const soma = [ 1, 2, 3, 4, 5, 6]

const descobrirSoma = (acumulador, atual) => acumulador + atual

console.log(soma.reduce(descobrirSoma))