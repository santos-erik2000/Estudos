/*  
 * Quando Uso valores primitivos em uma Variavel, e atribuo essa variavel em outra.
 * Variavel ira receber o mesmo Valor. Mas os valores serao Independentes
 */

 let c =3;
 let d = c
 d++
 console.log(c, d)

 /*
  * Mas quando estou trabalhando com Objeto, Quando a variavel Obejeto A e atribudido
  * Para a variavel B, elas terao a mesma referencia, mas nao valores. Elas seram dependentes
  * Caso mude um valor na A o B ira ser influenciado. 
  */

const a = {nome:'teste'}
const b = a

console.log(a ,b)

b.nome ="teste2"

console.log(a ,b)


let valor // sem Valor
console.log(valor) // Indefinido, Por nao ter Valores, mas foi declarado

valor = null; // ausencia de valor, Nao aponta pra nenhum local de memoria, e nao tem valores
console.log(valor)



const obj ={}
console.log(obj)

obj.preco = 500

console.log(obj.preco)


obj.preco =undefined;
delete obj.preco
console.log(obj)

obj.preco = null
console.log(!!obj.preco)


