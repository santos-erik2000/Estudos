console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1

exports.b  = 2

module.exports = {
    nome:'Erik'
}

console.log(module.exports.nome)