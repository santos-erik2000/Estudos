// forma literao de Objeto

const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funcao construtora
function Worker(name, salary, absents) {
    this.name = name
    this.getSalary = () => {
        return salary - (absents * 100)
    }
}



const f1 = new Worker('Erik', 5000, 1)
console.log(f1.getSalary())

// factory function


function criarFuncionario(nome,salario,faltas){
    return{
        nome,
        salario,
        faltas,
        getSalary(){
            return salario - (faltas * 100)
        }
    }
}


// Factory Function

const p1 = criarFuncionario('Erik', 5000,1)
console.log(p1.getSalary())


// Object.Create
const filha = Object.create(null)
filha.nome = 'erik'
console.log(filha)

