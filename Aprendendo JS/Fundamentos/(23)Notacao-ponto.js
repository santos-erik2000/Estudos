function Obj(nome){
    this.nome = nome; // ira deixar o atributo Publico, podemos chamar fora do escopo
    this.exec = function (){
        console.log('Ola')
    }
}


const objs =  new Obj('cadeira')
const objss = new Obj('Mesa')

console.log(objs.nome)
console.log(objss.nome)

objss.exec()