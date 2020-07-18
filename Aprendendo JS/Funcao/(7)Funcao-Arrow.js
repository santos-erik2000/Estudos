let dobro = function(a){ // Nome da function implicita
    return 2 * a
}

    dobro = (a) => {    
        return 2 *a
    }

dobro = a => 2* a // Somente um parametro
console.log(dobro(Math.PI))
////////////////////////////////

let ola = function(){
    return 'ola'
}

ola = () => {
    return 'ola'
}



console.log(ola())

