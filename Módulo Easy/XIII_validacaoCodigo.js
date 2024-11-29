function getSumOfPositions(numArray, isPair) {
  if (isPair) {
    return numArray.reduce((acc, currentCode, index) => index % 2 === 0 ? acc + Number(currentCode) : acc, 0);
  }

  return numArray.reduce((acc, currentCode, index) => index % 2 !== 0 ? acc + Number(currentCode) : acc, 0);
}

function generateDigit(numArray) {
  const sumEvenPositions = getSumOfPositions(numArray, true);

  const multiplication = sumEvenPositions * 3;

  const sumOddPositions = getSumOfPositions(numArray, false);

  const sumAndMultiplactionOddPositions = sumOddPositions + multiplication;

  const restDivision = sumAndMultiplactionOddPositions % 10;

  return restDivision !== 0 ? 10 - sumAndMultiplactionOddPositions % 10 : 0;
}

function validateCode(code) {
  const numberArray = code.toString().split('').map(Number);

  const numberArrayWithoutDigit = numberArray.slice(0, -1);

  const correctDigit = generateDigit(numberArrayWithoutDigit);

  return correctDigit === numberArray[numberArray.length - 1]
}

console.log(validateCode(547020743789)) // true
console.log(validateCode(301354030348)) // true
console.log(validateCode(301354030349)) // false
console.log(validateCode(123456789872)) // false

/**
 * RESOLUÇÃO
 * 
 *
 */