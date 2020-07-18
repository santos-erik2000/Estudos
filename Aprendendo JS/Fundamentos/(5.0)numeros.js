const peso1 = 1.0;
const peso2 = Number('2.0'); // Transformar em um Numero

console.log(peso1, peso2); 
console.log(Number.isInteger(peso1));// verificando se a variavel e inteiro
console.log(Number.isInteger(peso2));// verificando se a variavel e inteiro


const avaliacao1 = 9.971;
const avaliacao2 = 6.871;

const total = peso1*avaliacao1 + peso2*avaliacao2
const media = total / (peso1 + peso2)


console.log(media.toFixed(2)) // Controlar o numero de casas depois da virgula
console.log(media.toString(2)) // Transforma em um Binario
console.log(typeof media)