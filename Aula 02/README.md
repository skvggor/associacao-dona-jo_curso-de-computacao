# Aula 2 - Ferramentas, Tipos de dados e variáveis

## Resumo

## Instalação de ferramentas

Na aula, aprendemos como instalar o Visual Studio Code e o Nodejs, duas ferramentas importantes para o desenvolvimento de software.

O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft. Ele oferece recursos avançados de edição de código, depuração, gerenciamento de pacotes, integração com controle de versão e muitos outros recursos úteis para desenvolvedores de software. Ele é altamente personalizável e pode ser estendido com uma ampla variedade de extensões.

O Nodejs é uma plataforma de desenvolvimento de software que permite que os desenvolvedores criem aplicativos em JavaScript que podem ser executados fora do navegador. Ele inclui um tempo de execução de JavaScript baseado no mecanismo V8 do Google Chrome e um conjunto de bibliotecas e módulos para facilitar o desenvolvimento de aplicativos em tempo real, aplicativos da web, serviços web, aplicativos móveis e muito mais.

Para instalar o Visual Studio Code, geralmente baixamos o instalador do site oficial da Microsoft e o executamos. Em seguida, podemos personalizar as configurações padrão e instalar extensões adicionais, conforme necessário.

Para instalar o Nodejs, geralmente baixamos o instalador do site oficial do Nodejs e o executamos. Em seguida, podemos executar comandos no terminal para verificar se a instalação foi concluída com sucesso e instalar pacotes adicionais, conforme necessário.

## Tipos de dados

Em programação, um tipo de dado é um valor que pode ser armazenado em uma variável ou manipulado em uma operação. Os tipos de dados comuns em JavaScript incluem:

- Strings: são sequências de caracteres, como "Olá mundo!".
- Números: são valores numéricos, como 42 ou 3.14.
- Booleanos: são valores verdadeiros ou falsos, como true ou false.
- Objetos: são valores que podem ter propriedades e métodos, como objetos de data, matrizes e funções.
- Null e Undefined: são valores que representam a ausência de um valor definido.
- Symbol: é um tipo de dado único e imutável.

Além disso, em JavaScript, os tipos de dados podem ser classificados como primitivos e não primitivos. Os tipos de dados primitivos incluem strings, números, booleanos, null e undefined. Eles são valores imutáveis e não possuem métodos ou propriedades. Já os tipos de dados não primitivos são objetos e symbols. Eles são mutáveis e podem ter métodos e propriedades.

## Variável

Uma variável é um nome que representa um valor. As variáveis em JavaScript são declaradas usando as palavras-chave `var`, `let` ou `const`. Quando você declara uma variável, você reserva espaço na memória para armazenar um valor. Você pode atribuir um valor a uma variável usando o operador `=`. Por exemplo:

```javascript
let nome = "João";
let idade = 30;
let isAdulto = true;
```

Neste exemplo, criamos três variáveis: `nome`, `idade` e `isAdulto`. `nome` é uma string, `idade` é um número e `isAdulto` é um booleano. Você pode alterar o valor de uma variável a qualquer momento, atribuindo um novo valor a ela. Por exemplo:

```javascript
nome = "Maria";
idade = 25;
isAdulto = false;
```

Agora, `nome` é "Maria", `idade` é 25 e `isAdulto` é falso.

### Exemplo extra

```javascript
let nome = "João";
let idade = 30;
let altura = 1.75;
let solteiro = true;

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Altura: " + altura);
console.log("Solteiro: " + solteiro);
```

## Descobrindo quais os tipos de dados

Em JavaScript, podemos usar os operadores `typeof`, `String()` e `Number()` para descobrir e converter tipos de dados.

### `typeof`

O operador `typeof` retorna uma string que representa o tipo de dado de uma variável ou expressão. Por exemplo:

```javascript
let nome = "João";
let idade = 30;
let isAdulto = true;

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof isAdulto); // boolean
```


## String()

O método `String()` pode ser usado para converter um valor em uma string. Por exemplo:

```javascript
let numero = 42;
let numeroString = String(numero);

console.log(typeof numero); // number
console.log(typeof numeroString); // string
```

## Number()

O método `Number()` pode ser usado para converter uma string em um número. Por exemplo:

```javascript
let numeroString = "42";
let numero = Number(numeroString);

console.log(typeof numeroString); // string
console.log(typeof numero); // number
```

### Exemplo extra

```javascript
let numero = 7;
let valor = 10;

for (let i = 1; i <= valor; i++) {
  console.log(numero, "X", i, "=", numero * i);
}
```

O código acima é um exemplo de como usar o loop for em JavaScript para criar uma tabuada simples.

Na primeira linha, declaramos uma variável chamada `numero` e atribuímos a ela o valor `5`. Em seguida, declaramos outra variável chamada `valor` e atribuímos a ela o valor `10`, que será usado para multiplicar pelo número.

Em seguida, iniciamos um loop `for` que começa com `i` igual a `1` e termina quando `i` é menor ou igual a `10`. A cada iteração do loop, usamos `console.log()` para imprimir a multiplicação de `numero` por `i`.

Além disso, as variáveis `numero`, `valor` e `i` são todas declaradas usando a palavra-chave `let`. Isso significa que elas são variáveis mutáveis e podem ter seu valor alterado ao longo do código.
