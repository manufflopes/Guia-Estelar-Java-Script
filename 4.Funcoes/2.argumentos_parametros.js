// function expression
// function anonymus

// parametros (parameters)

const sum = function (number1, number2) {
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

function fazerSuco(fruta1,fruta2) {
    return 'suco de: ' + fruta1+ ' com '+ fruta2
}

const copo = fazerSuco('maçã','banana')

console.log(copo)


