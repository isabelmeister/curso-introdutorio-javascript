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
function comparacaoEntreElementos(elementoA, elementoB) {
// não altere a linha acima
    
/*
 * Complete a função atribuindo na 
 * variável `resultado` a comparação 
 * `elementoA` E `elementoB`.
 */
  


// não altere as linhas abaixo
  return resultado;
}
// fim do seu código

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  
    const inputs = readLine().split(' ');

    const result = comparacaoEntreElementos(inputs[0] === 'true', inputs[1] === 'true');
  
    ws.write(result + '\n');
  
    ws.end();
}
