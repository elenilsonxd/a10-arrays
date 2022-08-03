const   arrayNumero = [2,5,8,1]
const   arrayString = ["casa", "carro", "ar condicionado"]
const   arrayVariadas = ['casa',7, true]

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(arrayNumero.length)
console.log(arrayString.length)
console.log(arrayVariadas.length)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(arrrayNumero[0])
console.log(arrayString[1])
console.log(arrayVariadas[2])

// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
const temNum = arrayNumero.includes(8)
console.log(temNum)
const   naoNum = arrayVariadas.includes("3")
console.log(naoNum)