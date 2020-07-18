function pessoa (nome){
    let nomePessoa = nome

    this.falar = function(){
        console.log(`Meu nome e ${nomePessoa}`)
    }
}

const P1 = new pessoa('Erik Gabriel dos Santos')
P1.falar()