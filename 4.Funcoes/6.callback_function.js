// callback function
/*
Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
*/

function sayMyName(name) {
    console.log('antes de executar a função callback function')
    name()
    console.log('depois de executar a callback function')
}

sayMyName(() => {
    console.log('estou em uma callback function')
})
