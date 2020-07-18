const obj1 = {a:1, b:2, c:3}
console.log(JSON.stringify(obj1))

console.log(JSON.parse('{"Nome": "Erik","Idade": 35, "masculino": true}'))


function weekDays(day){

    let number = String;
    switch(day){
        case 7:
            console.log('Sabado')
            break;
        case 6:
            console.log('Sexta')
            break;
        case 5: 
            console.log('Quinta')
            break;
        case 4:
            console.log('Quarta')
            break;
        case 3:
            console.log('Terca')
            break;
        case 2:
            console.log('Segunda') 
            break;
        case 1:
            console.log('Domingo') 
            break;
        default:
            console.log('Valor Invalido')
            break;
    }
}
weekDays(1)