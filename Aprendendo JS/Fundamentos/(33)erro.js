function tratarErroELancar(erro){
    // throw new Error('Ouve um erro, analistas estao concertando')
    throw {
        nome: erro.name ,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){

    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e) {
        tratarErroELancar(e)
    }
    
}

const obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)
// Tratamento de Erro.