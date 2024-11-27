function factorial(num) {
  const bigNum = BigInt(num);

  if (bigNum === 0n) return 1n;

  return bigNum * factorial(bigNum - 1n);
}

console.log(factorial(5)) // 120n
console.log(factorial(0n)) // 1n
console.log(factorial(32n)) // 263130836933693530167218012160000000
console.log(factorial(9n)) // 362880n

/**
 * RESOLUÇÃO
 * 
 * O objetivo era criar uma função que recebesse um número e retornasse seu fatorial. Ex: 5 -> 5x4x3x2x1 = 120n
 * 
 * Resolvi criando uma função que recebe um inteiro ou BigInt. A função irá calcular de forma recursiva o fatorial do parametro recebido, e como em JS o tipo inteiro não consegue trabalhar com valores muito grande, fiz a formatação do valor recebido para BigInt antes de iniciar os cálculos, e todo o restando do cálculo agora utilizo o "n" ao final do valor pois não é possível calcular um número inteiro com um BigInt.
 */   
