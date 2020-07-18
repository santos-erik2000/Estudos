function getInteiro(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let repeticoes  = 0

while(opcao != -1){    // enquanto a expressao for Verdadeira, ira repetir o Comando ate gerar uma expressao Falsa
    opcao = getInteiro(-1, 10)
    if(opcao%2 == 0){
        console.log('Par: ' + opcao)
    }else{
        console.log('Impar: ' + opcao)
    }
    repeticoes ++
    
}    

console.log('Numero de Repeticoes: ' + repeticoes)