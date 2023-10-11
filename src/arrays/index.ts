// OBS: o comando "start" no package.json deve estar assim:
// "start": "ts-node src/arrays/index.ts"
// As instruções estao em src/arrays/exercises.txt
// Escreva suas soluções aqui

/**
 * Exercício 1 - Criando um array
 */

const frutas = ['maçã', 'laranja', 'manga', 'banana'];
console.log('1. Frutas: ', frutas);

/**
 * Exercício 2 - Acessando elementos
 */
console.log('2. Terceiro elemento do Array: ', frutas[2]);

/**
 * Exercício 3 - Adicionando elementos
 */

frutas.push('uva');
console.log('3. Adicionando uma fruta no Array: ', frutas);

/**
 * Exercício 4 - Removendo elementos
 */
frutas.shift();
console.log('4. Removendo primeira fruta: ', frutas);

/**
 * Exercício 5 - Verificando o comprimento
 */
console.log('5. Comprimento do Array: ', frutas.length);

/**
 * Exercício 6 - Iterando com loop
 */
frutas.forEach((fruta) => console.log('6. Iterando: ', fruta));

/**
 * Exercício 7 - Encontrando um elemento
 */
function buscaFruta(elemento: string): any {
  return frutas.includes(elemento);
}

let fruta = 'laranja';

if (buscaFruta(fruta)) {
  console.log('7. A ' + fruta + ' existe no array');
} else console.log('7 . A ' + fruta + ' não existe no array');

/**
 * Exercício 8 - Ordenando um array
 */
console.log('8. Array ordenado: ', frutas.sort());

/**
 * Exercício 9 - Juntando arrays
 */

const frutas2 = [
  'Guabiroba',
  'Pitaia',
  'Físalis',
  'buriti',
  'banana',
  'manga',
  'mamão',
];
const frutasCombinadas = frutas.concat(frutas2);

console.log('9. Array de frutas concatenados', frutasCombinadas);

/**
 * Exercício 10 - Removendo duplicatas
 */

const set = new Set(frutasCombinadas);
// Set() retorna um objeto por isso é preciso fazer o parse para Array
const removerDuplicatas = Array.from(set);

console.log('10. Sem Duplicatas: ', removerDuplicatas);

/**
 * Exercício 11 - Substituindo elementos
 */
frutasCombinadas[1] = 'pêssego';
console.log('11. Substituindo o segundo elemento: ', frutasCombinadas);

/**
 * Exercício 12 - Filtrando um Array
 */

function frutaComLetraM(fruta: string) {
  if (fruta[0] === 'm') return fruta;
}
const frutasSelecionadas = frutasCombinadas.filter(frutaComLetraM);
console.log(
  '12. Frutas Selecionadas: ',
  Array.from(new Set(frutasSelecionadas))
);
