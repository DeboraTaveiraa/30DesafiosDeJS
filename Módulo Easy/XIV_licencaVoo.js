class Pilot {
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
    this.flightLicense = false;
  }

  generateLicense() {
    let license = '';
  
    const lastNameFormatted = this.getLastNameFormatted();
  
    license += lastNameFormatted;
    license += '-';
    license += this.birthday.getFullYear().toString()[2];
    license += this.getBirthdayFullMonth();
    license += this.birthday.getFullYear().toString()[3];
    license += '.';
    license += this.firstName[0].toLowerCase();

    this.flightLicense = license;
  }

  getBirthdayFullMonth() {
    if (this.birthday.getMonth() < 9) return `0${this.birthday.getMonth() + 1}`
    return `${this.birthday.getMonth() + 1}`

  }

  getLastNameFormatted() {
    return this.lastName.length >= 5 
      ? this.lastName.slice(0, 5).toUpperCase() 
      : `${this.lastName.toUpperCase()}${'9'.repeat(5-this.lastName.length)}`;
  }
}

const pilot1 = new Pilot('John', 'Doe', '01-25-1977');
const pilot2 = new Pilot('Hal', 'Jordan', '09-02-1995', '');
const pilot3 = new Pilot('Carol', 'Danvers', '08-17-1968', '');
const pilot4 = new Pilot('Poe', 'Dameron', '03-09-1979', '');

pilot1.generateLicense();
pilot2.generateLicense();
pilot3.generateLicense();
pilot4.generateLicense();

console.log(pilot1);
console.log(pilot2);
console.log(pilot3);
console.log(pilot4);

/**
 * RESOLUÇÃO
 * 
 * O objetivo era criar uma classe de piloto, que recebesse seu nome, sobrenome e data de aniversário.
 * E com esses dados, gerasse um código de licença com as seguintes regras:
 * - Os primeiros cinco caracteres do sobrenome em letras maiúsculas, e caso não tenha 5 letras completar o com o número 9 a quantindade restante
 * - O 6° caractere é um traço "-"
 * - O 7° caractere é o algarismo da década (penúltimo) do ano de nascimento
 * - O 8° e 9° caractere são o mês de nascimento
 * - O 10° é o algarismo do ano (último) do ano de nascimento
 * - O 11° é um ponto "."
 * - E o 12° é aa primeira letra do nome em minúscula
 * 
 * Solucionei criando uma classe que recebe os parametros;
 * para o valor de birthday formatei o valor com new Date();
 * para o valor de flightLicense criei a função generateLicense():
 * [1ª regra]: para pegar o cinco primeiro caractere do sobrenome criei uma função para isso, onde o tamanho do sobrenome, se for maior que cinco então pego somente as cinco primeiras posições, pra isso utilizei o slice() e depois formatei em tudo maiúscula com toUpperCase(), e caso seja menor que cinco eu pego todo o sobrenome, transformo em maiúscula, e acrescento ao final a quantidade restante com o valor "9" utilizando o repeat() e dentro dele calculando 5 - lastName.length() para saber a quantidade restante e que será completado;
 * [3ª regra]: utilizei o getFullYear() para pegar somente o valor do ano de nascimento e depois peguei o valor da década na posição 2; 
 * [4ª regra]: criei a função getBirthdayFullMonth() que verifica se o valor do mês é menor ou igual a 9, se for acrescento o "0" na frente, somo o valor com +1 pois o valor do mês na formatação utilizando o new Date() é de 0 a 11;
 * [5ª regra]: também utilizei getFullYear() para obter o valor do ano de nascimento, e peguei o último algarismo na posição 3
 */