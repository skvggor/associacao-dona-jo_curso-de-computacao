# Entendendo o `switch` em JavaScript

O `switch` é uma estrutura de controle de fluxo que permite selecionar blocos de código para serem executados com base em uma expressão ou valor. Ele é útil quando você deseja executar diferentes blocos de código, dependendo do valor de uma variável ou expressão.

## Estrutura básica do `switch`

Aqui está a estrutura básica de um `switch` em JavaScript:

```javascript
switch (expressao) {
  case valor1:
    // Bloco de código para valor1
    break;
  case valor2:
    // Bloco de código para valor2
    break;
  // ...
  default:
    // Bloco de código para quando nenhuma das opções anteriores corresponder
}
```

- `expressao`: É a expressão ou variável cujo valor será comparado com os valores das cláusulas `case`.
- `case`: Define um valor a ser comparado com a expressão. Se a expressão for igual ao valor do `case`, o bloco de código associado será executado.
- `break`: Interrompe a execução do `switch` e sai da estrutura. É importante incluir o `break` após cada bloco de código `case` para evitar que o código continue executando as cláusulas `case` seguintes.
- `default`: É opcional e define um bloco de código a ser executado quando nenhum dos valores `case` corresponder à expressão. Ele deve ser colocado no final do `switch`.

## Exemplo de uso do `switch`

Vamos considerar um exemplo simples que demonstra o uso do `switch` para exibir uma mensagem com base em uma variável chamada `diaDaSemana`:

```javascript
const diaDaSemana = 2;

switch (diaDaSemana) {
  case 1:
    console.log('Hoje é segunda-feira');
    break;
  case 2:
    console.log('Hoje é terça-feira');
    break;
  case 3:
    console.log('Hoje é quarta-feira');
    break;
  case 4:
    console.log('Hoje é quinta-feira');
    break;
  case 5:
    console.log('Hoje é sexta-feira');
    break;
  case 6:
    console.log('Hoje é sábado');
    break;
  case 7:
    console.log('Hoje é domingo');
    break;
  default:
    console.log('Dia inválido');
}
```

Neste exemplo, o valor da variável `diaDaSemana` é comparado com os valores das cláusulas `case`. Como o valor de `diaDaSemana` é 2, a mensagem "Hoje é terça-feira" será exibida no console.

### Descubra o nome do mês

Neste exemplo, você aprenderá como usar a estrutura `switch` em JavaScript para exibir o nome do mês com base no número inserido pelo usuário.

### Como funciona

1. O usuário insere um número de 1 a 12 no campo de entrada.
2. Ao clicar no botão "Exibir mês", a função `exibirMes` é chamada.
3. A função utiliza um `switch` para determinar o nome do mês correspondente ao número inserido.
4. O nome do mês é exibido em um elemento `<p>` na página.

## Outro exemplo de código

Aqui está o código HTML e JavaScript completo do exemplo:

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calendário com Switch</title>
</head>
<body>
  <h1>Descubra o nome do mês</h1>
  <label for="mes">Digite o número do mês (1-12):</label>
  <input type="number" id="mes" min="1" max="12">
  <button onclick="exibirMes()">Exibir mês</button>
  <p id="nomeMes"></p>
  <script>
    function exibirMes() {
      const mes = document.getElementById('mes').value;
      const nomeMes = document.getElementById('nomeMes');
      let nome;

      switch (mes) {
        case '1':
          nome = 'Janeiro';
          break;
        case '2':
          nome = 'Fevereiro';
          break;
        case '3':
          nome = 'Março';
          break;
        case '4':
          nome = 'Abril';
          break;
        case '5':
          nome = 'Maio';
          break;
        case '6':
          nome = 'Junho';
          break;
        case '7':
          nome = 'Julho';
          break;
        case '8':
          nome = 'Agosto';
          break;
        case '9':
          nome = 'Setembro';
          break;
        case '10':
          nome = 'Outubro';
          break;
        case '11':
          nome = 'Novembro';
          break;
        case '12':
          nome = 'Dezembro';
          break;
        default:
          nome = 'Mês inválido';
      }

      nomeMes.textContent = nome;
    }
  </script>
</body>
</html>
```

Lembre-se de que o uso do `switch` pode tornar o código mais legível e fácil de manter quando comparado a várias instruções `if` aninhadas.
