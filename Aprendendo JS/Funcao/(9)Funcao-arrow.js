let comparar = function(param){
    console.log(this === param)
}

comparar(global)


const obj = {}
comparar = comparar.bind(obj)
comparar(global)
comparar(obj)

let compararArrow = (param) => {
    console.log(this ===param)
}

compararArrow(global)