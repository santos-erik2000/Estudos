function getRandom(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
 let opcao = 0

 do { // primeiro o codigo sera processado, e apos ira ter a verificacao
    opcao = getRandom(-1, 10)
    console.log('Numero: ' + opcao)
 } while(opcao != - 1)