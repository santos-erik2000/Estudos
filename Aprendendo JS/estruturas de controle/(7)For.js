let contador = 1;

while(contador != 10){
    contador ++
    console.log(contador)
}
console.log('-------------------------')

let contador2 = 0;
for (let i = 1;i<=10;i++){
    if(i%2 == 0){
        console.log("PAR: " + i)
        contador2++
    } else{
        console.log("Impar:" + i)
    }
}

console.log("Numero de repeticoes Par: " + contador2)
console.log('-------------------------')


let contador3 = 0
const notas = [6.7 ,7.9 ,8.0 ,7]
for(let i=0; i < notas.length;i++){ //length Comprimento do Array
    console.log(`nota = ${notas[i]}`)
    contador3 ++
}
