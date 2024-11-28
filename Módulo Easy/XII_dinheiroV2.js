function moneyExchanged(value) {
  const exchanged = {
    '500': 0,
    '100': 0, 
    '25': 0, 
    '10': 0, 
    '5': 0, 
    '1': 0,
  }

  let currentMoney = value;

  exchanged['500'] = Math.floor(currentMoney / 500);
  currentMoney -= 500 * Math.floor(currentMoney / 500);

  exchanged['100'] = Math.floor(currentMoney / 100);
  currentMoney -= 100 * Math.floor(currentMoney / 100);

  exchanged['25'] = Math.floor(currentMoney / 25);
  currentMoney -= 25 * Math.floor(currentMoney / 25);

  exchanged['10'] = Math.floor(currentMoney / 10);
  currentMoney -= 10 * Math.floor(currentMoney / 10);

  exchanged['5'] = Math.floor(currentMoney / 5);
  currentMoney -= 5 * Math.floor(currentMoney / 5);

  exchanged['1'] = Math.floor(currentMoney / 1);
  currentMoney -= 1 * Math.floor(currentMoney / 1);

  return exchanged;
}

console.log(moneyExchanged(478)) // {'1': 3, '5': 0, '10': 0, '25': 3, '100': 4, '500': 0}
console.log(moneyExchanged(384)) // {'1': 4, '5': 1, '10': 0, '25': 3, '100': 3, '500': 0}
console.log(moneyExchanged(5412)) // {'1': 2, '5': 0, '10': 1, '25': 0, '100': 4, '500': 10}
console.log(moneyExchanged(50)) // {'1': 0, '5': 0, '10': 0, '25': 2, '100': 0, '500': 0}

/**
 * RESOLUÇÃO
 * 
 * O objetivo era criar uma função que recebesse um valor inteiro de dinheiro e trocasse por valores menores (1, 5, 10, 25, 100 e 500), priorizando sempre trocos de valor maior. 
 * 
 * Nessa segunda versão do problema, faço a divisão do valor restante pelo valor de troco, assim, o resultado dessa divisão já me dirá quantos trocados daquela espécie irei armazenar no objeto. E para que essa divisão não me retorne um número quebrado, utilizei o método Math.floor() que irá arredondar para baixo o resultado da divisão para um inteiro mais próximo, ou seja, se o resultado for 1,5 será arredondado para 1, pois é essa quantidade de fato que conseguiremos realizar o troco. E para diminuir o valor atual do dinheiro restante e continuar o cálculo com os demais trocados, fiz um cálculo inverso, onde multiplicamos o valor do trocado pela quantidade de vezes que ele foi utilizado, utilizando novamente o Math.floor().
 */