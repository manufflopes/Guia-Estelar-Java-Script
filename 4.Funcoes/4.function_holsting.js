// function hoisting

/*
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
*/

// sayMyName()

// // function sayMyName() {
// //     console.log('Mike')
// // }

// // const sayMyName = function () {
// //     console.log('Mike')
// // }

// sayMyName = function () {
//     console.log('Mike')
// }

console.log(meuNome);
var meuNome= 'Bob';
