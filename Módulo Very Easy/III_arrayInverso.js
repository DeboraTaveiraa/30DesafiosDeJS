function reverse(...arr) {
  if (!arr.length) return [];

  const lastItem = arr[arr.length - 1];

  arr.pop();

  if (!arr.length) return [lastItem];

  return [lastItem, ...reverse(...arr)];
}

function reverseII(...arr) {
  let reversedArray = [];

  for (let i = 0; i < arr.length; i++) {
    reversedArray.push(arr[arr.length - 1 - i])
  }

  return reversedArray;
}

function reverseIII(...arr) {
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr[arr.length - 1 - i])
    i++;
  }

  return newArr;
}

console.log(reverseIII(0,9,6,8,9,1,5,7))

console.log(reverseIII('Oh', 'Hi', 'Mark'))

console.log(reverseIII(false, true, true, true))

console.log(reverseIII("It's", "not", true, 0))

/**
 * RESOLUÇÃO
 * 
 * Na 1ª função utilizei a recursividade para reverter todos os itens do array
 * Na 2ª utilizei laço de repetição for
 * Na 3ª utilizei laço de repetição while
 */