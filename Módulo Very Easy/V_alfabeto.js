function getBiggerLetter(text) {
  const textSplit = text.toLowerCase().split('');

  const biggerLetter = textSplit.reduce((acc, currentValue) => currentValue > acc ? currentValue : acc, textSplit[0]);

  return biggerLetter;
}

function getBiggerLetterII(text) {
  const textSplitSorted = text.toLowerCase().split('').sort();

  return textSplitSorted[textSplitSorted.length - 1];
}

console.log(getBiggerLetterII('Lorem ipsum dolore sec avanti')) // v
console.log(getBiggerLetterII('Hello')) // o
console.log(getBiggerLetterII('May the force be with you')) // y
console.log(getBiggerLetterII('Its over nine thousand')) // v

/**
 * RESOLUÇÃO
 * 
 * O objetivo era construir uma função que recebe uma string e retorna a maior letra seguindo a ordem do alfabeto.
 * 
 * Nas duas funções, transformei a string em array para separar as letras.
 * 
 * Na 1ª função utilizei o método reduce() e o operador ">" para percorrer o array de string e retornar a maior letra
 * 
 * Na 2ª função utilizei o método sort() para ordenar o array na ordem alfabetica, e assim obter a maior letra na última posição
 */