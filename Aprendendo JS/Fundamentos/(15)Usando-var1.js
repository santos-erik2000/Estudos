// Escopo de var funciona em Function

function teste (){
    var local = 123
    //console.log(local)
}
teste()
console.log(local) // is not defined
