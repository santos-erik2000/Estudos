const nome ="rebeca"
const concatenacao="ola " + nome + "!"
const template =  `
    ola
    ${nome}`
console.log(concatenacao,template)

// expressoes....
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase() // funcao arrow

console.log(`Ei... ${up('cuidado')}!!`)