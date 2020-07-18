Array.prototype.forEach2 = function (callback){
    for (let i =0; i < this.length;i++){
        callback(this[i], i, this)
    }
}


const nomes = ['Erik','ana', 'rebeca','sara']




nomes.forEach2(function(nomes, indice){
    console.log(`${indice + 1} ${nomes}`)
})