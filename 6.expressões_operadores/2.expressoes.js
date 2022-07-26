/*
New

A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

Um exemplo de seu uso é:

let date = new Date('2020-12-01')
console.log(date.__proto__)
*/
/*
    new
        *left-hand-side expression
        * criar um novo objeto
*/

let nome = new String('Mayk')
nome.surName = "Brito"
let age = new Number(23)
console.log(nome.surName,age)

/* Typeof delete

Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.

Exemplos de uso:

* delete *
const person = {
    name: 'Mayk',
    age: 25,
}
delete person.age

console.log(person)
Nesse caso estamos deletando a propriedade age do objeto person.

console.log(tyepof "mayk")
Aqui vemos qual o tipo de dado que temos, nesse caso uma string. */

/*
    Operadores unários 
    typeof
    delete
*/

const person ={
    name: 'Mayk',
    age:25,
}
delete person.age

console.log(person)
