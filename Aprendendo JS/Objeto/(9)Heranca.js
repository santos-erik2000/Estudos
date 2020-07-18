const dad = {nome: 'Erik', Altura: 1.75, corCabelo: 'Preto', idade: 40}

const son = {__proto__:dad, nome:'Victor', altura: 1.70, idade: 20}

const doughter = Object.create(dad,{
    nome: {value:'Isa', writable: false, enumerable: true},
    corCabelo : {value: 'Loiro', writable: true, enumerable: true},
    idade:{ value:18,  writable:false, enumerable:true}
})

console.log(Object.keys(son))
console.log(Object.keys(doughter))

for(let key in doughter){
    doughter.hasOwnProperty(key) ? 
        console.log(key, " Pertence") : console.log(`Por heranca: ${key}`)

}