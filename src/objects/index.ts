/**
 * Exercício 1 - Criação de Objeto
 */

interface Pessoa {
  nome: string;
  idade: number;
  cidade: string;
  endereco: Endereco;
  profissao?: string;
  apresentar(): void;
  enderecoCompleto(): string;
  buscarPorNome?(parametro: string): string;
}

interface Endereco {
  rua: string;
  numero: number;
  bairro: string;
  cep: string;
}

interface Carro {
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
}

const pessoa: Pessoa = {
  nome: 'Maria Clara',
  idade: 25,
  cidade: 'Água Boa',
  endereco: {
    rua: 'Maria das Flores',
    numero: 522,
    bairro: 'Nova Campinas',
    cep: '13.160-896',
  },
  apresentar() {
    console.log(
      `5. Olá meu nome é ${pessoa.nome} tenho ${pessoa.idade} anos, moro em ${pessoa.cidade} e minha profissão é ${pessoa.profissao}`
    );
  },
  enderecoCompleto() {
    return `Rua ${pessoa.endereco.rua}, nº ${this.endereco.numero}, ${this.endereco.bairro}, CEP: ${this.endereco.cep}`;
  },
};

const carro: Carro = {
  marca: 'Volkswagen',
  modelo: 'Passat',
  ano: 1973,
  cor: 'bege',
};

console.log('1. Pessoa: ', pessoa);

/**
 * Exercício 2 - Acessando propriedades
 */

console.log('2. Idade:', pessoa.idade);

/**
 * Exercício 3 - Adicionando propriedades
 */
console.log('3. Profissão: ', (pessoa.profissao = 'programador'));

/**
 * Exercício 4 - Alterando propriedades
 */
console.log('4. Cidade:', (pessoa.cidade = 'Campinas'));

/**
 * Exercício 5 - Método em Objeto
 */
pessoa.apresentar();

/**
 * Exercício 6 - Objetos aninhados
 */

// definidos acima

/**
 * Exercício 7 - Propriedades aninhados
 */
console.log(`7. Número da rua: ${pessoa.endereco.numero}`);

/**
 * Exercício 8 - Método com propriedades aninhados
 */
console.log(`8. Endereço completo: ${pessoa.enderecoCompleto()}`);

/**
 * Exercício 9 - Criando outro objeto
 */
console.log(
  `9. Carro velho: ${carro.marca}, ${carro.modelo}, ${carro.ano}, ${carro.cor}.`
);

/**
 * Exercício 10 - Array de objetos
 */
const pessoas: Pessoa[] = [
  {
    nome: 'Marcelo Dias',
    idade: 37,
    cidade: 'Passo Alto',
    endereco: {
      rua: 'Dois',
      numero: 134,
      bairro: 'alvorada',
      cep: '123.456-457',
    },
    profissao: 'Engenheiro civil',
    apresentar() {
      console.log(
        `5. Olá meu nome é ${pessoa.nome} tenho ${pessoa.idade} anos, moro em ${pessoa.cidade} e minha profissão é ${pessoa.profissao}`
      );
    },
    enderecoCompleto() {
      return `Rua ${pessoa.endereco.rua}, nº ${this.endereco.numero}, ${this.endereco.bairro}, CEP: ${this.endereco.cep}`;
    },
  },
  {
    nome: 'Ana Paula',
    idade: 23,
    cidade: 'Poços de Caldas',
    endereco: {
      rua: 'Dos Sorrisos',
      numero: 563,
      bairro: 'Andradas',
      cep: '123.456-789',
    },
    profissao: 'Babá',
    apresentar() {
      console.log(
        `5. Olá meu nome é ${pessoa.nome} tenho ${pessoa.idade} anos, moro em ${pessoa.cidade} e minha profissão é ${pessoa.profissao}`
      );
    },
    enderecoCompleto() {
      return `Rua ${pessoa.endereco.rua}, nº ${this.endereco.numero}, ${this.endereco.bairro}, CEP: ${this.endereco.cep}`;
    },
  },
  {
    nome: 'Eduardo',
    idade: 15,
    cidade: 'Anápolis',
    endereco: {
      rua: 'Presidente Prudent',
      numero: 693,
      bairro: 'Clarins',
      cep: '456.789-123',
    },
    profissao: 'Estudante',
    apresentar() {
      console.log(
        `5. Olá meu nome é ${pessoa.nome} tenho ${pessoa.idade} anos, moro em ${pessoa.cidade} e minha profissão é ${pessoa.profissao}`
      );
    },
    enderecoCompleto() {
      return `Rua ${pessoa.endereco.rua}, nº ${this.endereco.numero}, ${this.endereco.bairro}, CEP: ${this.endereco.cep}`;
    },
  },
  {
    nome: 'Flavia Sousa',
    idade: 40,
    cidade: 'Cidade de Deus',
    endereco: {
      rua: 'Primeiro de março',
      numero: 140,
      bairro: 'Cidade Baixa',
      cep: '789.123-456',
    },
    profissao: 'Contadora',
    apresentar() {
      console.log(
        `5. Olá meu nome é ${pessoa.nome} tenho ${pessoa.idade} anos, moro em ${pessoa.cidade} e minha profissão é ${pessoa.profissao}`
      );
    },
    enderecoCompleto() {
      return `Rua ${pessoa.endereco.rua}, nº ${this.endereco.numero}, ${this.endereco.bairro}, CEP: ${this.endereco.cep}`;
    },
  },
  {
    nome: 'Maurício Ceola',
    idade: 65,
    cidade: 'Campinas',
    endereco: {
      rua: 'Rua da filosofia',
      numero: 2,
      bairro: 'Heaven',
      cep: '123.456-789',
    },
    profissao: 'Escritor e Físico',
    apresentar() {
      console.log(
        `5. Olá meu nome é ${pessoa.nome} tenho ${pessoa.idade} anos, moro em ${pessoa.cidade} e minha profissão é ${pessoa.profissao}`
      );
    },
    enderecoCompleto() {
      return `Rua ${pessoa.endereco.rua}, nº ${this.endereco.numero}, ${this.endereco.bairro}, CEP: ${this.endereco.cep}`;
    },
  },
];

console.log(`10. Pessoas \n `);
pessoas.map((pessoa) => {
  console.log(
    ` Nome: ${pessoa.nome} \n Idade: ${pessoa.idade} \n Cidade: ${pessoa.cidade} \n Profissão: ${pessoa.profissao}\n`
  );
});

/**
 * Exercício 11 - étodo buscar por nome
 */

function buscarPorNome(nome: string) {
  const pessoaEncontrada = pessoas.find(
    (pessoa) =>
      pessoa.nome.toLowerCase().trim() === nome.toLocaleLowerCase().trim()
  );
  return pessoaEncontrada ? pessoaEncontrada : `11. Pessoa não encontrada \n`;
}

console.log(buscarPorNome('Maurício Ceola'));

/**
 * Exercício 12 - Modificar Propriedades em um Array de Objetos
 */

console.log(' \n 12 . Saudações: \n');

const adicionandoSaudacao = pessoas.map((pessoa) => {
  return { ...pessoa, saudacao: `Olá ${pessoa.nome} seja bem vindo(a)!` };
});

console.log(
  adicionandoSaudacao.forEach((pessoa) =>
    console.log(`Saudações: ${pessoa.saudacao}`)
  )
);
