function square(n) {
  const separateNumbers = n.toString().split('');

  let squaredNumber = separateNumbers.reduce((acc, currentN) => {
    return `${acc}${Number(currentN) * Number(currentN)}`;
  }, '');

  return Number(squaredNumber);
}

function squareII(n) {
  const separateNumbers = n.toString().split('');

  const squaredNumber = separateNumbers.map(num => Number(num) ** 2).join('');

  return Number(squaredNumber);
}

console.log(squareII(3514)) // 925116
console.log(squareII(994571)) // 81811625491
console.log(squareII(24)) // 416
console.log(squareII(745821698)) // 4916256441368164

/**
 * RESOLUÇÃO
 * 
 * O objetivo era criar uma função que recebesse um numero qualquer, elevasse ao quadrado cada número separadamente e depois juntasse os resultados em um único valor no formato numérico.
 * 
 * Na 1ª função resolvi o problema com utilizando o método reduce() e multiplicando o valor por ele mesmo.
 * Na 2ª função utilizei o método map(), operador de exponenciação (**) e o join() para juntar tudo ao final
 * 
 * Nas duas funções transformei o valor recebido como parâmentro em string e depois em array para facilitar percorrer e calcular
 */