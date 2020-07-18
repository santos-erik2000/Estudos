const dad = {nome: 'Rubens', corDoCabelo: 'Preto'}

const son = Object.create(dad,{

    nome: {value:'Erik', writable: false, enumerable:true,},
    altura: {value: 43, writable:false, enumerable:true},
    cabelo: {__proto__:dad, writable:false, enumebrable:true}

})

const doughter = Object.create(dad)
doughter.nome = 'Emily'

console.log(` Her ${doughter.nome} has a ${doughter.corDoCabelo} Hair`)
console.log(` His ${son.nome} has a ${son.corDoCabelo} Hair`)
console.log(Object.keys(son), Object.keys(doughter))


for( let key in son){
    son.hasOwnProperty(key) ? 
        console.log("Proprio " + key) : console.log(`Por heranca: ${key}`)
}



