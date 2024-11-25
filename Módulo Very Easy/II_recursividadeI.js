function recursiveChunk(number) {
  if (number === 0) return ''

  if (number === 1) return `chunk`

  return `chunk-${recursiveChunk(number - 1)}`
}

console.log(recursiveChunk(4))
console.log(recursiveChunk(1))
console.log(recursiveChunk(8))
console.log(recursiveChunk(2))

/**
 * TESTES
 * 
 * Entrada: 4
 * Saída: "chunk-chunk-chunk-chunk"
 * 
 * Entrada: 1
 * Saída: "chunk"
 * 
 * Entrada: 8
 * Saída: "chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk"
 * 
 * Entrada: 2
 * Saída: "chunk-chunk"
 */

/**
 * RESOLUÇÃO
 * 
 * Utilizei recursividade, chamando a própria função até obter uma string com a quantidade de "chunks" relativos ao número passado como parametro.
 */