Object.prototype.att0 = 'Z'
const avo = {att1: 'A'}
const pai = {__proto__:avo, att2:'B'}
const filho = {__proto__:pai, att3: 'C'}

console.log(filho.att1, filho.att0, filho.att2)
/////////////////

const carro = {
    modelo: 'A4',
    velAtual: 0,
    velMax:200,

    acelerar(delta){
        if (delta + this.velAtual <= this.velMax) {
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        } 
    },

    getStatus(){
        return `modelo: ${this.modelo}, de ${this.velAtual}KM/H para ${this.velMax}KM/H`
    }

}

const ferrari = {
    modelo: ' Ferrari A50',
    velMax:320
}

const fusca = {
    
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(fusca,carro)

fusca.acelerar(50)
fusca.acelerar(50)
fusca.acelerar(50)
fusca.acelerar(50)

console.log(fusca.getStatus())