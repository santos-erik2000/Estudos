// higher order number (Funcao sendo um Dado)


//criar de forma Literal
function fun1(){ }


// armazenar Funcao na Variavel
const fun2 = function (){ }

// armazenar em um array
const array = [function (a,b){ return a + b}, fun1(), fun2()]
console.log(array[0](5,9))

// armazenar em um Objeto
const obj = {}
    obj.falar = function() {return 'Opa'}
    console.log(obj.falar())


// passar Funcao com Parametro
function run(fun){
    fun()
}

run(function(){console.log('Executando....')})


// uma funcao pode retornar/conter um Funcao
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(10,9)(10)
