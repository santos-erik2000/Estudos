const pessoa2 = {
    nome:'rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa2))
console.log(Object.values(pessoa2))
console.log(Object.entries(pessoa2))

Object.defineProperty(pessoa2, 'dataDeNascimento',{
    enumerable: true,
    writable:false,
    value: '01/01/2019'
})

console.log(pessoa2)
//*********************** **************************/
const pessoa = {}

Object.defineProperty(pessoa, 'Name',{
    enumerable: true,
    writable: false,
    value: 'Erik'
})

Object.defineProperty(pessoa,'Age',{
    enumerable: true,
    writable:false,
    value: 19
})

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}:${valor}`)
})

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest,o1,o2)

console.log(obj)