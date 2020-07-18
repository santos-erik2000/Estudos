// middleware pattern (chain of responsaiblity)

const passo1 = (context,next) =>{
    context.valor1 = 'mid1'
    next()
}

const passo2 = (context,next) =>{
    context.valor2 = 'mid2'
}

const passo3 = context => context.valor3 = 'mid3'


const exec = (ctx,...middleware) =>{
    const exePasso = indice =>{
        
    }
}