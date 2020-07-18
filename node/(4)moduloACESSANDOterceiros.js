const _ = require('lodash')

let quantidade = 0;
const somarQuantidade = () => quantidade+=1
setInterval(()=> console.log(somarQuantidade(),_.random(1, 1000)),2000)