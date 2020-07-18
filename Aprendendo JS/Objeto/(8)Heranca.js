function myObject(){}
console.log(myObject.prototype)

const obj1 = new myObject
const obj2 = new myObject

console.log(obj1.__proto__ === obj2.__proto__)
console.log(myObject.prototype.__proto__ === Function.prototype)

myObject.prototype.nome = 'Anonimo'
myObject.prototype.falar = function(){
    console.log(`Hello, My name is ${this.nome}`)
}

obj1.falar()
obj1.nome = 'Erik'
obj1.falar()

obj2.nome = 'Rebeca'
obj2.falar()


console.log((new myObject).__proto__ === myObject.prototype)
console.log(myObject.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)



