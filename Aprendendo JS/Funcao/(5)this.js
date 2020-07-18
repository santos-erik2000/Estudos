// referencia o objeto no contexto de execucao

// BIND ele "amarra" o this, em somente um determinado objeto, nao o deixando alterar
const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
const falar = pessoa.falar
falar()


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()