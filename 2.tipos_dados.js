/* 
String 
    *Cadeia de caracteres
    "" // aspas duplas
    '' // aspas simples
    `` // template literal ou template strings - multiplas linhas, permite que coloque expressões dentro de uma template
    */

console.log('Mayk')

/*Números 
        33 // inteiros
        12.5 // reais-float
        Nan // not a number
        infinity // infinito
    */
console.log(12.5 / 4)
console.log(12.5 / 'abc')
console.log(12.5 === Infinity)

/*
    Boolean
        *somente dois valores:
            true // verdadeiro
            false // falso
   */
console.log(false)
console.log(true)

/*
    * undefined
        indefinido -> não existe
    * null
        nulo -> existe mas não tem nada dentro
        objeto que não possui nada dentro
        diferente de indefinido
*/
console.log(null)
console.log(undefined)

/*
    *Object
        objeto
        propriedades/ atributos
        funcionalidades / metodos
    {propriedade: valor}
*/
console.log({
    name: 'Mayk',
    idade: 36,
    andar: function () {
        console.log('andar')
    }
})

/*
    *array (vetores)
        uma lista
        agrupamento de dados
    ["Mayk", 36]
*/
console.log(['Mayk', 36])
console.log(['Leite', 'Ovos', 'Sal', 2, 4, 1])

/*
    Conclusão
        Conforme o ECMAScript standart temos 9 tipos de dados: 
            * Data types
                primitive / Primitive Value
                structural
                structural primitive
        
        
        ## Primitivos
            * string
            * number
            * boolean (true ou false)
            * undefined
            * symbol - não vimos
            * BigInt - não vimos
        
        ## Estruturais
            * Object
                array
                map
                set
                date
                ...
            * Function
        
        ## Primitivo Estrutural / Structural Root Primitive
            * null

    

*/
