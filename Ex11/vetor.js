let valores = [8, 4, 5, 7, 6]

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])


for(let pos=0; pos < valores.length; pos++) {
    console.log(`a posição é ${pos} e tem os valores ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`a posição é ${pos} e tem os valores ${valores[pos]}`)
}