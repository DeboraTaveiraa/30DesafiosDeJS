function moneyExchanged(value) {
  const exchanged = {
    1: 0,
    5: 0, 
    10: 0, 
    25: 0, 
    100: 0, 
    500: 0
  }

  let currentMoney = value;

  while (currentMoney > 0) {
    if (currentMoney >= 500) {
      currentMoney -= 500;
      exchanged[500] += 1;
      continue;
    }

    if (currentMoney >= 100) {
      currentMoney -= 100;
      exchanged[100] += 1;
      continue;
    }

    if (currentMoney >= 25) {
      currentMoney -= 25;
      exchanged[25] += 1;
      continue;
    }

    if (currentMoney >= 10) {
      currentMoney -= 10;
      exchanged[10] += 1;
      continue;
    }

    if (currentMoney >= 5) {
      currentMoney -= 5;
      exchanged[5] += 1;
      continue;
    }

    currentMoney -= 1;
    exchanged[1] += 1;
  }

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
 * Resolvi o problema criando um objeto com os valores para trocado começando todos com 0;
 * Utilizei laço de repetição while que só irá parar de executar quando o valor do dinheiro recebido chegar a 0;
 * Utilizei dentro do while vários IFs, para que, validasse o valor, sempre priorizando os trocados maiores, então, caso um valor for igual ou maior que 500, por exemplo, diminuo esse valor do atual e adiciono +1 na chave de 500 do objeto;
 * Ao final, quando 
 */