function transformToSimpleArray(arr) {
  const numbers = [];

  arr.forEach(item => numbers.push(...item))

  return numbers.sort((a, b) => a - b);
}

console.log(transformToSimpleArray([[1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]]));
console.log(transformToSimpleArray([[1, 3], [4, 8], [7, 5], [2, 6]]));
console.log(transformToSimpleArray([[], [], [], []]));
console.log(transformToSimpleArray([[100, 50], [60, 100], [20, 100, 70], [10, 40, 80]]));

/**
 * RESOLUÇÃO
 * 
 * O objetivo era criar uma função que recebesse um array bidimensional de números (array dentro de outro array), e que transformasse ele em um único array ordenando os números de forma crescente.
 * 
 * Para transformar em um único array, utilizei o forEach e fui desestruturando os valores dentro dos arrays e acionando-os em um novo array. E para orderná-los, utilizei o método sort().
 */