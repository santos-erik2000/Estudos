let isAtivo =false;
console.log(isAtivo)

isAtivo =true;
console.log(isAtivo)

isAtivo=1
console.log(!!isAtivo) // !! continua a logica
                      // ! oposto da logica
                      // ! = nao


console.log('Os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))


console.log("os Falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('Para Finalizar...')
console.log(('',null,'ola '))


let nome ='Erik'
console.log(nome || 'Digite seu Nome')