console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function exe(){
    console.log(this === global)
    console.log(this === module.exports)
    console.log(this === exports)
}

exe()