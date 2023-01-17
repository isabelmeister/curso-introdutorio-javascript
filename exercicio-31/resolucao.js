'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
// start main function
/*
 * Nas linhas abaixo, escreva uma função chamada `imprimeSaudacao``
 * que receba um parâmentro chamado `nome` e imprima:
 * "Olá, ", seguido do valor do parâmetro `nome`, seguido de exclamação (!)
 */

// escreva aqui seu código:
 
 

// fim do seu código

function main() {
    const name = readLine()

    imprimeSaudacao(name);
}
