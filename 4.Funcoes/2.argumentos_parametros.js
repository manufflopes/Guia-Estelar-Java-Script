// function expression
// function anonymus

// parametros (parameters)

let sum = function (number1, number2) {
    console.log(number1 + number2)
}

sum(2, 3) // arguments - argumentos
sum(12, 63)
sum(25, 39)

// retornando valores dentro da funcao
let total = 0

const plus = function (number1, number2) {
    let total = number1 + number2
    return total
}

let number1 = 28
let number2 = 36

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma dos números é ${plus(number1, number2)}`)
console.log(total)

// outras maneiras de entender funções

// função é um liquidificador

let frutasBatidas = []

function fazerSuco(fruta1, fruta2) {
    frutasBatidas.push(fruta1)
    frutasBatidas.push(fruta2)
    return 'suco de: ' + frutasBatidas.join(' com ')
}

let copo = fazerSuco('maçã', 'banana')
console.log(copo)

copo = fazerSuco('laranja', 'cenoura')
console.log(copo)

copo = fazerSuco('morango', 'laranja')
console.log(copo)

function firstLetter(pessoa) {
    return pessoa.charAt(0)
}
console.log(firstLetter('Manuella'))
console.log(firstLetter('Thulio'))
console.log(firstLetter('Vitor'))
console.log(firstLetter('Renilde'))
console.log(firstLetter('Lucas'))

let pessoas = ['Manuella', 'Thulio', 'Vitor', 'Renilde', 'Lucas']

for (let pessoa = 0; pessoa < pessoas.length; pessoa++) {
    console.log(firstLetter(pessoas[pessoa]))
}
