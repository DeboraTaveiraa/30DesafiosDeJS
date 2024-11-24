function average(...numbers) {
  const totalNumbers = numbers.length;

  const sumOfNumbers =  numbers.reduce((acc, currentNumber) => acc + currentNumber, 0)

  return sumOfNumbers / totalNumbers
}

console.log(average(10, 9, 6, 8, 9, 1, 5, 7))
console.log(average(2, 5, 7, 1, -2))
console.log(average(10, 10, 10, 10, 9))
console.log(average(25, 75))

/**
 * TESTES
 * 
 * Entrada: 10, 9, 6, 8, 9, 1, 5, 7
 * Saída: 6.875
 * 
 * Entrada: 2, 5, 7, 1, -2
 * Saída: 2.6
 * 
 * Entrada: 10, 10, 10, 10, 9
 * Saída: 9.8
 * 
 * Entrada: 25, 75
 * Saída: 50
 */

/**
 * RESOLUÇÃO
 * 
 * Utilizei rest parameter que permite que a função receba um número indefinido de argumentos no formato de um array
 */