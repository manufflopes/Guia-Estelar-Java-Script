//funcoes_construtoras
/*
    Function () Constructor
        * expressão new
        * criar um novo objeto
        * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + ' está andando.'
    }
}

const mayk = new Person('Mayk')
console.log(mayk.walk())
const joao = new Person('Joao')
console.log(joao.walk())

/*
As funções construtoras em JavaScript têm a seguinte utilidade: servir de molde para a criação de objetos.
Para construir objetos, funções construtoras precisam ser instanciadas pelo operador new. O this dentro delas se referencia ao objeto criado a partir delas.
No exemplo abaixo, a função Carro é uma função construtora, e carro1 é um objeto criado a partir do “molde” dessa classe, usando o operador new:
As funções construtoras em JavaScript são como as classes do Java, diferenciando apenas pela sintaxe. Em questão de funcionamento, tanto funções contrutoras no JavaScript quanto Classes no Java têm a mesma utilidade: servir de molde para a criação de objetos.
Para construir objetos, funções construtoras precisam ser instanciadas pelo operador new. O this dentro delas se referencia ao objeto criado a partir delas.
No exemplo abaixo, a função Carro é uma função construtora, e carro1 é um objeto criado a partir do “molde” dessa classe, usando o operador new:
*/

function Carro(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

const carro1 = new Carro('Charger', 'RT', 1970)

console.log(carro1)

/* É preciso um return para ser considerado uma função construtora?
Normalmente, os construtores não têm um return. Isso acontece porque tudo o que lhes é informado é simplesmente passado ao this.
Por outro lado, havendo um return os comportamentos esperados são dois:
Se o return for chamado com um objeto, ele irá retornar no lugar do this.
Se o return for vazio ou seguido de um valor primitivo, ele será ignorado.
Nesse exmplo, o return está sendo utilizado dentro de um construtor seguido de um objeto:
*/

function Aluno() {
    this.nome = 'Miguel'

    return { nome: 'Alexa' } // esse será o objeto retornado!
}

console.log(new Aluno().nome) // de fato, retornou "Alexa"

// Já nesse caso, o return é vazio:

function Aluno() {
    this.nome = 'Miguel'

    return // return vazio!
}

console.log(new Aluno().nome)
// Acessa o this do construtor, que é Miguel

/*
Qual a diferença entre retornar um objeto literal e um criado por função construtora?
Ao se criar objetos usando funções construtoras em JavaScript, estes seguirão o molde definido pela função, recebendo seus atributos e métodos.

Para criar objetos literais, é necessário um controle para garantir que os objetos tenham as mesmas propriedades. Uma solução é criá-los com uma função factory (“fábrica”), que garante o retorno de objetos literais com características explícitas. As funções factory são semelhantes às construtoras, mas sem o uso do new.
   */
