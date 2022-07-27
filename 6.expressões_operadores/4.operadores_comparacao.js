/* 
Grouping operator ( )
Vamos falar sobre um operador que agrupa expressões, os parênteses.
Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, que moverá a precedência do cálculo.

let total = 2 + 3 * 5
console.log(total)
//com essa precedência, nosso resultado é 17.

let total = (2 + 3) * 5
console.log(total)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.
*/
let total= "alo, alo" + " voce"
console.log(total)
//------------------------

/* 
Operadores de comparação 
Irá comparar valores e retornar um Boolean como resposta à comparação 
*/
let one = 1
let two = 2

// * == *  => igual a
    console.log(two == 1)
    console.log(one == "1")

// * != *  => diferente de
    console.log(one != two)
    console.log(one != 1)
    console.log(one != "1")

// * === * => estritamente igual a
    console.log( one==="1")
    console.log(one===1)

// * !== * => estritamente diferente de
console.log( two!=="2")
console.log(two!==2)    

//-------------------------------------

//  Operadores de comparação maior e menor (igual)

// > maior que
    console.log(one>two)

// >= maior igual a
    console.log(one>= 1)
    console.log(two>= 1)

// <= menor que
    console.log(one<two)

// <= menor igual a 
    console.log(one<=two)
    console.log(one<=1)
    console.log(one<=0)
    console.log(one<=two)




