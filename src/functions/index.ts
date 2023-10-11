// OBS: o comando "start" no package.json deve estar assim:
// "start": "ts-node src/functions/index.ts"
// As instruções estao em src/functions/exercises.txt
// Escreva suas soluções aqui

/**
 * Exercício 1 - Função de saudação
 */
function saudacao(nome: string) {
  return `1. Saudações: Olá ${nome}!`;
}

console.log(saudacao('Ana'));

/**
 * Exercício 2 - Função de Soma
 */

function soma(num1: number, num2: number) {
  return console.log(
    // corrigir
    `2. Soma dos números: ${num1} + ${num2} é igual a ${num1 + num2}.`
  );
}

soma(21, 3);

/**
 * Exercício 3 - Função de Subtração
 */

function subtracao(num1: number, num2: number) {
  return console.log(
    `3.Subtração dos números: ${num1} - ${num2} é igual a ${num1 - num2}.`
  );
}

subtracao(20, 12);

/**
 * Exercício 4 - Função de Multiplicação
 */

function multiplicacao(num1: number, num2: number) {
  return num1 * num2;
}

console.log(`4.Multiplicação dos números é igual a ${multiplicacao(12, 2)}.`);

/**
 * Exercício 5 - Função de Divisão
 */

function divisao(num1: number, num2: number) {
  return num1 / num2;
}

console.log(`5. Divisão dos números: ${divisao(2, 12)}.`);

/**
 * Exercício 6 - Função Par ou Ímpar
 */
function ehPar(numero: number) {
  return numero % 2 === 0 ? true : false;
  // pode ser feito:  return numero % 2 === 0
}

console.log(ehPar(3) ? '6. É par' : '6. É ímpar');

/**
 * Exercício 7 - Função Maior de 3 números
 */

function maiorNumero(num1: number, num2: number, num3: number) {
  return Math.max(num1, num2, num3);
}

console.log('7. O maior dos três números é:', maiorNumero(450, 8, 20));

/**
 * Exercício 8 - Função média das notas
 */

function mediaNotas(notas: number[]) {
  const inicialValue = 0;

  const sum = notas.reduce(
    (acumulator, currentValue) => acumulator + currentValue,
    inicialValue
  );

  const media = sum / notas.length;
  return media.toFixed(2);
}

console.log('8. A média das notas é: ', mediaNotas([6.2, 6.8, 4, 9.88, 2.2]));

/**
 * Exercício 9 - Função Contagem de vogais
 */

function contarVogais(str: string) {
  let somarVogais = 0;
  let vogais = 'aeiou';

  for (let i = 0; i < str.length; i++) {
    let caractere = str.toLocaleLowerCase().charAt(i);
    if (vogais.indexOf(caractere) !== -1) somarVogais++;
  }
  return somarVogais;
}

console.log(`9. Existem ${contarVogais('aeiouAEIOU')} vogais nessa string.`);

/**
 * Exercício 10 - Função Palíndromo
 */

function ehPalindromo(str: string) {
  if (str.toLowerCase() === String(str).split('').reverse().join(''))
    return true;
  return false;
}

console.log(ehPalindromo('tubo') ? '10. É palindromo' : '10. Não é palindromo');

/**
 * Exercício 11 - Função Palíndromo
 */

function potencia(num1: number, num2: number) {
  return num1 ** num2;
}

console.log(`11. Potencia: ${potencia(10, 2)}`);

/**
 * Exercício 12 - Função Concatenação de Strings
 */
function concatenar(str1: string, str2: string) {
  return str1.concat(str2);
}

console.log(
  '12. Concatenação de strings: ',
  concatenar('Eu adoro', ' arroz com ovo')
);
