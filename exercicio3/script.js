const   arrayNumero = [2,5,8,1]
const   arrayString = ["casa", "carro", "ar condicionado"]
const   arrayVariadas = ['casa',7, true]

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const arrayNumeroCopia = arrayNumero.slice()
const arrayStringCopia = arrayString.slice()
const arrayVariadasCopia = arrayVariadas.slice()

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayNumero.push(3)
console.log(arrayNumero)
console.log(arrayNumeroCopia)

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arrayString.pop()
console.log(arrayString)
console.log(arrayStringCopia)

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayVariadas.splice(1,1)
console.log(arrayVariadas)
console.log(arrayVariadasCopia)
