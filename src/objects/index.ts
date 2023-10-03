// OBS: o comando "start" no package.json deve estar assim:
// "start": "ts-node src/objects/index.ts"
// As instruções estao em src/objects/exercises.txt
// Escreva suas soluções aqui

console.log('Boa sorte com os objetos!');

// codigo exemplo:

const obj = { a: 'a', b: 'b', c: 'c' };

console.log(obj);

/**
 * Exercício 1 - Criação de Objeto
 */

interface Pessoa {
  nome: string;
  idade: number;
  cidade: string;
  profissao?: string;
}

const pessoa: Pessoa = {
  nome: 'Maria Clara',
  idade: 15,
  cidade: 'Água Boa',
};

/**
 * Exercício 2 - Acessando propriedades
 */

console.log('2. Idade:', pessoa.idade);

/**
 * Exercício 3 - Adicionando propriedades
 */
pessoa.profissao = 'programador';
