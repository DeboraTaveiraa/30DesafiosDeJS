function formattedStringEndRemoveWhiteSpace(str) {
  return str.toUpperCase().split(' ').join('');
}

function numberOfLetters(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    charCount[currentLetter] = charCount[currentLetter] ? charCount[currentLetter] + 1 : 1;
  }

  return charCount;
}

function validatesEqualAmountOfLetters(lettersObject) {
  return Object.values(lettersObject).every((value, index, arr) => value === arr[0]);
}

function sameAmountOfLetters(str) {
  const strFormatted = formattedStringEndRemoveWhiteSpace(str);

  const lettersObject = numberOfLetters(strFormatted);

  const sameAmount = validatesEqualAmountOfLetters(lettersObject);

  return sameAmount;
}

console.log(sameAmountOfLetters('This is Thee')) // true
console.log(sameAmountOfLetters('ssd')) // false
console.log(sameAmountOfLetters('Lorem ipsum')) // false
console.log(sameAmountOfLetters('QQwweerrttyy')) // true

/**
 * RESOLUÇÃO
 * 
 * O objetivo era criar uma função que recebesse uma string e validasse se a quantidade de cada letra existente eram todas o mesmo valor. Ex.: Aiai (a: 2, i: 2), logo, é true.
 * 
 * Nessa 2ª versão resolvi o problema um pouco diferente:
 * Criei uma função principal 'sameAmountOfLetters' que recebe a string;
 * nela chamo a segunda função 'formattedStringEndRemoveWhiteSpace' para formatar essa string, deixando todas as letras em maiúscula e removendo os espaços em branco;
 *  chamo a função 'numberOfLetters'que percorre todo a string utiliando o for e armazeno a quantidade que aparece cada letra um um objeto;
 * e por último chamo a função 'validatesEqualAmountOfLetters' que valida com o método every se todos os valores do objeto são iguais.
 */   

