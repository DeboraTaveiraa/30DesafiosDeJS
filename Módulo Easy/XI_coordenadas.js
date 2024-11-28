function coordinates(arr) {
  const result = [];

  for (let x = 0; x <= arr[0]; x++) {
    for (let y = 0; y <= arr[1]; y++) {
      result.push([x, y]);
    }
  }

  return result;
}

console.log(coordinates([2, 2]))
console.log(coordinates([2, 7]))
console.log(coordinates([-3, -3]))
console.log(coordinates([7, 6]))

/**
 * RESOLUÇÃO
 * 
 * O objetivo era criar uma função que recebesse um array contendo as coordenadas de x e y e retornasse um array bidimensional com valores menores ou iguais as coordenadas recebidas de forma crescente.
 * 
 * Para isso, utilizei estrutura de repetição for para criar os valores de X, e outro for dentro para criar os valores de Y, e dessa forma armazeno esses dois valores em um array bidimensional.
 */