# Aula 3 - Operadores e condições

## Resumo
Operadores são usados para realizar operações matemáticas e lógicas em valores e variáveis, enquanto as estruturas condicionais são usadas para executar instruções com base em determinadas condições. Para aprender operadores e condições em qualquer linguagem de programação, é essencial entender os conceitos básicos de programação e lógica, além de estar familiarizado com a sintaxe e estruturas da linguagem que está aprendendo. Além disso, é útil ter uma compreensão sólida dos tipos de dados e variáveis que você estará usando em suas instruções.

## Operadores matemáticos

| OPERADOR | SIGNIFICADO | EXEMPLO |
| --- | --- | --- |
| + | Adição | a + b |
| - | Subtração | a - b |
| * | Multiplicação | a * b |
| / | Divisão | a / b |
| % | Módulo (resto da divisão) | a % b |
| ++ | Incremento (adiciona 1) | a++ |
| -- | Decremento (subtrai 1) | a-- |

## Operadores relacionais/condicionais e lógicos

| OPERADOR | SIGNIFICADO | EXEMPLO |
| --- | --- | --- |
| RELACIONAIS/CONDICIONAIS | | |
| == | Igual a | a == b |
| != | Diferente de | a != b |
| < | Menor que | a < b |
| > | Maior que | a > b |
| <= | Menor ou igual a | a <= b |
| >= | Maior ou igual a | a >= b |
| LÓGICOS | | |
| && | E lógico (AND) | a && b |
| &#124;&#124; | Ou lógico (OR) | a &#124;&#124; b |
| ! | Negação lógica (NOT) | !a |

### "Tabela Verdade" do operador lógico AND (E ou &&)

| A | B | A AND B |
| --- | --- | --- |
| Falso | Falso | Falso |
| Falso | Verdadeiro | Falso |
| Verdadeiro | Falso | Falso |
| Verdadeiro | Verdadeiro | Verdadeiro |

### "Tabela Verdade" do operador lógico OR (OU ou ||)

| A | B | A OR B |
| --- | --- | --- |
| Falso | Falso | Falso |
| Falso | Verdadeiro | Verdadeiro |
| Verdadeiro | Falso | Verdadeiro |
| Verdadeiro | Verdadeiro | Verdadeiro |

## Condicionais

Em programação, as condicionais são estruturas que permitem que o fluxo do programa seja alterado com base em uma condição. Essas estruturas avaliam uma expressão ou valor e decidem qual ramo do programa deve ser executado com base no resultado da avaliação.

### IF (SE)

As condicionais mais comuns são as instruções "if" e "else". A instrução "if" verifica uma condição e executa um bloco de código se a condição for verdadeira. Já a instrução "else" é usada em conjunto com a instrução "if" e executa um bloco de código diferente se a condição for falsa.

Além disso, é comum utilizar a instrução "else if" para testar múltiplas condições em sequência, permitindo diferentes caminhos de execução dependendo dos resultados dos testes.

As estruturas condicionais são fundamentais na programação, pois permitem que um programa tome decisões e execute diferentes ações com base em diferentes situações. Isso torna os programas mais flexíveis e capazes de lidar com diferentes cenários.

Segue abaixo um exemplo em JavaScript de como utilizar uma estrutura condicional "if" para imprimir uma mensagem no console do navegador se uma determinada condição for atendida:

```js
const idade = 18

if (idade >= 18) {
  console.log("Você é maior de idade.")
} else {
  console.log("Você é menor de idade.")
}
```

Nesse exemplo, a variável "idade" é inicializada com o valor 18. Em seguida, a estrutura condicional "if" verifica se a idade é maior ou igual a 18. Se a condição for verdadeira, a mensagem "Você é maior de idade." será impressa no console. Caso contrário, a mensagem "Você é menor de idade." será impressa.

### SWITCH/CASE

Além da estrutura condicional "if/else", outra estrutura condicional relevante é o "switch/case". Essa estrutura é utilizada quando se deseja testar uma expressão com múltiplas possibilidades. O "switch" é a expressão a ser testada, enquanto o "case" é a possibilidade a ser comparada com o valor do "switch". Caso o valor seja igual, o bloco de código correspondente ao "case" é executado.

Segue abaixo um exemplo em JavaScript de como utilizar uma estrutura condicional "switch/case" para imprimir uma mensagem no console do navegador dependendo do valor de uma variável:

```js
let diaDaSemana = 5
let mensagem

switch (diaDaSemana) {
  case 1:
    mensagem = "Hoje é segunda-feira."
    break
  case 2:
    mensagem = "Hoje é terça-feira."
    break
  case 3:
    mensagem = "Hoje é quarta-feira."
    break
  case 4:
    mensagem = "Hoje é quinta-feira."
    break
  case 5:
    mensagem = "Hoje é sexta-feira."
    break
  default:
    mensagem = "Não é um dia da semana válido."
}

console.log(mensagem)
```

Nesse exemplo, a variável "diaDaSemana" é inicializada com o valor 5. Em seguida, a estrutura condicional "switch/case" é utilizada para verificar o valor dessa variável e armazenar uma mensagem correspondente na variável "mensagem". No caso do valor ser igual a 5, a mensagem "Hoje é sexta-feira." será armazenada na variável "mensagem" e impressa no console. Se o valor não corresponder a nenhum dos "cases", a mensagem "Não é um dia da semana válido." será armazenada e impressa.

#### Exercício:

Crie um programa em JavaScript que, a partir da entrada dos dados via prompt e confirm, avalie se uma pessoa está apta ou não a obter a habilitação de motorista. Para ser considerado apto, a pessoa deve:

- Maior de 18 anos
- Inscrição para tirar a CNH
- Exames psicológicos (psicotécnico)
- Aptidão física e mental (médico)
- Curso teórico-técnico
- Prova sobre a legislação
- Curso de prática veicular
- Exame de direção veicular

	O programa deve exibir uma mensagem via alert indicando se a pessoa está apta ou não a obter a habilitação.

```js
let idade = parseInt(prompt("Digite sua idade:"))
let inscricao = confirm("Você já se inscreveu para tirar a CNH?")
let psicotecnico = confirm("Você já fez o exame psicotécnico?")
let aptidao = confirm("Você já fez o exame de aptidão física e mental?")
let cursoTeorico = confirm("Você já concluiu o curso teórico-técnico?")
let provaLegislacao = confirm("Você já fez a prova sobre a legislação?")
let cursoPratica = confirm("Você já concluiu o curso de prática veicular?")
let exameDirecao = confirm("Você já fez o exame de direção veicular?")

if (idade >= 18 && inscricao && psicotecnico && aptidao && cursoTeorico && provaLegislacao && cursoPratica && exameDirecao) {
  alert("Parabéns, você está apto a obter a habilitação de motorista!")
} else {
  alert("Você ainda não cumpriu todos os requisitos para obter a habilitação de motorista.")
}
```
