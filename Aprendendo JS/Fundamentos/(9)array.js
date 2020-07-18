const valores = [7.7, 8.9, 6.3, 9.2] // forma literal
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] =10
console.log(valores)
console.log(valores.length) // quantoos elementos tem no Array

valores.push({id:3}, false,null,'teste') // adicionar novos elementos array
console.log(valores)


console.log(valores.pop()) //ira retirar o ultimo valor do array
delete valores[0] // ira deletar o indice do array

console.log(valores)

console.log(typeof valores)