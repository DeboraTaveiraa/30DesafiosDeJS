function formattedName(name) {
  const nameSplit = name.split(' ');

  return nameSplit.reduce((acc, currentName, index) => {
    if (index === 0) return `${currentName[0].toUpperCase()}.`;

    if (index === nameSplit.length - 1) return `${currentName.toUpperCase()}, ${acc}`;


    return `${acc} ${currentName[0].toUpperCase()}.`
  }, '');
}

function formattedNameII(name) {
  const nameSplit = name.split(' ');
  let initials = ''

  for (let i = 0; i < nameSplit.length - 1; i++)  {
    initials += ` ${nameSplit[i][0]}.`;
  }

  return `${nameSplit[nameSplit.length - 1].toUpperCase()},${initials.toUpperCase()}`;
}

console.log(formattedNameII('Isaac Larrubia Ferreira Pontes')) // PONTES, I. L. F.
console.log(formattedNameII('John Ronald Reuel Tolkien')) // TOLKIEN, J. R. R.
console.log(formattedNameII('christopher james paolini')) // PAOLINI, C. J.
console.log(formattedNameII('Suzanne Marie Collins')) // COLLINS, S. M.

/**
 * RESOLUÇÃO
 * 
 * O objetivo era criar uma função que recebesse um nome completo e formatasse deixando no seguinte formato: ULTIMONOME, A. B. C.
 * 
 * Solucionei de duas formas diferentes, mas nas duas funções transformei a string em array para dividir as palavras. 
 * Na 1ª função utilizei o método reduce() e na 2ª utilizei o for
 */