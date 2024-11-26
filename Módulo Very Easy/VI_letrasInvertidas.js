function invertWord(word) {
  return word.toLowerCase().split('').reverse().join('');
}

function invert(text) {
  const invertedWords = text.split(' ').map(invertWord).join(' ');

  return invertedWords;
}

console.log(invert('Lorem ipsum dolore sec avanti')) // merol muspi erolod ces itnava
console.log(invert('Hello')) // olleh
console.log(invert('May the force be with you')) // yam eht ecrof eb htiw uoy
console.log(invert('Its over nine thousand')) // sti revo enin dnasouht

/**
 * RESOLUÇÃO
 * 
 * O objetivo era construir uma função que recebe uma string e retorna as palavras escritas de forma invertida sem afetar sua ordem.
 * 
 * Utilizei duas funções para isso, a 1ª, invert(), recebe o texto que terá as palavras invertidas, transforma essa string em array para dividir cada palavra, e faz o mapeamento desse array com o método map() que chama a 2ª função que irá de fato inverter cada palavra, utilizando o split() para converter a palavra em array para que cada letra se separe, depois utilizando o método reverse() que irá inverter todo esse array, e o join() para juntar novamente essas letras no formato de string. Temos então todas as letras invertidas no array, e por fim utilizamos novamente o join() no retorno da 2ª função para juntar todas as palavras invertidas em uma string com espaçamento entre elas.
 * 
 */