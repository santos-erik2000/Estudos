const moduloA = require('../../(2)moduloEXPORTANDO')
console.log(moduloA.falar())

const moduleB = require('saudacao')

console.log(moduleB.falar)

const moduleC = require('../PastaB/Pasta C')
console.log(moduleC.somar())
//const http = require('http')
//http.createServer((req, res) => {
//    res.write('Casamento dos Noivos Nathanael e Vitoria')
    //res.end()
//}).listen(9090)