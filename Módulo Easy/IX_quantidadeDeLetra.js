function transformStringIntoArray(str) {
  return str.toUpperCase().split(' ').join('').split('');
}

function numberOfLettersInObject(arr) {
  let lettersObject = {};

  arr.forEach((letter) => {
    lettersObject[letter] = lettersObject[letter] ? lettersObject[letter] + 1 : 1;
  });

  return lettersObject;
}

function validatesEqualAmountOfLetters(lettersObject) {
  return Object.values(lettersObject).every((value, index, arr) => value === arr[0]);
}

function sameAmountOfLetters(str) {
  const strArray = transformStringIntoArray(str);

  const lettersObject = numberOfLettersInObject(strArray);

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
 * Criei uma função principal 'sameAmountOfLetters' que recebe a string; 
 * nela chamo a segunda função 'transformStringIntoArray' para formatar essa string, deixando todas as letras em maiúscula, removendo os espaços em branco e transformando em array para separar cada letra;
 *  chamo a função 'numberOfLettersInObject'que percorre todo o array e armazena a quantidade que aparece cada letra um um objeto;
 * e por último chamo a função 'validatesEqualAmountOfLetters' que valida com o método every se todos os valores do objeto são iguais.
 */   