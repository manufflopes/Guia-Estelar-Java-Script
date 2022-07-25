/*
    Type conversion coersion

    Type conversiom (typecasting) vs type coersion

    * alteração de um tipo de dado para outro tipo de dado.

    Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.
*/

console.log('9' + 5)

//coersão de tipo

console.log(Number('9') + 5)

/* Strings em números
Transformar string em numero e numero em string

É possível transformar números em formato de string através do método Number() e números em formato number em string usando o método String().
*/

let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))

/*
    Manipulando Strings e Números

    Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.

    Contar quantos caracteres tem uma palavra e quantos digitos tem um número
*/

let word = 'paralelepipedo'
console.log(word.length)
let num = 1234
console.log(num.length)
console.log(String(num).length)

/*
    Casas decimais
    Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.

    transformar um número quebrado com 2 casas decimais e trocar ponto por virgula
*/

let numero = 387.665546897
console.log(numero.toFixed(2).replace('.', ','))

/*
Transforme letras minusculas em maiusculas. Faça o contrario tbm... 
Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.
*/

let letra = 'programar é muito bom'
console.log(letra.toLowerCase().toUpperCase())

/*

Encontrando palavras em frases

Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.
Verificar se o texto contém a palavra amor
*/
let phrase = ' eu quero viver o amor'
console.log(phrase.includes('amor'))

/*
    Separando strings

Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do arra. Depois disso, transforme o arra em um texto e onde eram espaços, coloque _
*/

let text = 'eu quero viver o amor'
let myArray = phrase.split(' ')
console.log(myArray)
let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore.toLowerCase())

/*
    Criando array com construtor

Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c").

    Criar array com construtor

*/

let meuArray = new Array(10)
console.log(meuArray)

/*
    Elementos do Array

Para contar a quantidade de elementos em um array pode-se usar o método length.

Contar elementos de um array
*/

console.log(
    [
        'a',
        { type: 'array' },
        function () {
            return 'alo'
        }
    ].length
)

/*
    Strings para arrays

Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. Por exemplo console.log(Array.from("developer").

Transformar uma cadeia de caracteres em elementos de um array
*/

let senha = 'manipulação'
console.log(Array.from(senha))

/*
    Manipulando arrays

Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.
*/
let techs = ["html", "css", "js"]

 //* adicionar um item no fim
 techs.push("nodejs")
 //* adicionar no começo
 techs.unshift("sql")
 //* remover do fim
 //techs.pop()
 //* remover do começo
 //techs.shift()
 //* pegar somente alguns elementos do array
 //console.log(techs.slice(1,3))
 //* remover 1 ou mais itens de qualquer posição do array
 //techs.splice(1, 1)
 //* encontrar a posição de um elemnto no array
 let index = techs.indexOf('css')
 techs.splice(index,1)
 
console.log(techs)