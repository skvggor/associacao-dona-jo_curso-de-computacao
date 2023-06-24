# Controle de tempo com JavaScript

## setTimeout

`setTimeout` é uma função que permite que você agende a execução de um bloco de código após um certo número de milissegundos. Aqui está a sintaxe básica:

```javascript
setTimeout(function, delay, param1, param2, ...)
```

Onde:

- `function`: Esta é a função que você deseja executar após o atraso. Isso pode ser uma função anônima ou uma função nomeada.
- `delay`: Este é o atraso, em milissegundos, que você deseja antes que a função seja executada.
- `param1, param2, ...`: Estes são parâmetros opcionais que você pode passar para a função.

Exemplo:

```javascript
const DELAY = 3000

const showMessage = () => {
  console.log('Esta mensagem aparecerá após 3 segundos!')
}

setTimeout(showMessage, DELAY)
```

## setInterval

`setInterval` é semelhante ao `setTimeout`, mas em vez de executar a função uma vez após o atraso, ela executará a função repetidamente em intervalos de tempo até que seja cancelada. Aqui está a sintaxe básica:

```javascript
setInterval(function, delay, param1, param2, ...)
```

Onde:

- `function`: Esta é a função que você deseja executar após o atraso. Isso pode ser uma função anônima ou uma função nomeada.
- `delay`: Este é o atraso, em milissegundos, que você deseja antes que a função seja executada.
- `param1, param2, ...`: Estes são parâmetros opcionais que você pode passar para a função.

Exemplo:

```javascript
let counter = 0

const LIMIT = 5
const DELAY = 1000

const interval = setInterval(() => {
  counter += 1

  console.log(`Esta mensagem foi impressa ${counter} vezes.`)

  if (counter >= LIMIT) clearInterval(interval)
}, DELAY)
```
