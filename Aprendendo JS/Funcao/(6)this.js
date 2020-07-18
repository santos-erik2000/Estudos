function Pessoa() {
    this.idade = 0
    const self = this;
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa



// dispara outra funcao apartir do intervalo determinado

