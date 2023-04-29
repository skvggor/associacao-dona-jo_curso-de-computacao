# Loops em JavaScript

Loops são uma parte fundamental da programação, pois permitem que você execute blocos de código repetidamente enquanto uma condição específica for verdadeira. Isso pode ser útil para processar listas de itens, realizar operações repetidas ou criar animações, entre outras coisas.

## Tipos de loops em JavaScript

Em JavaScript, existem dois tipos principais de loops: `for` e `while`.

### Loop `for`

O loop `for` é usado quando você sabe quantas vezes deseja que o loop seja executado. A sintaxe básica é a seguinte:

```javascript
for (inicialização; condição; incremento) {
    // bloco de código a ser repetido
}
```

Exemplo: Imprimir números de 1 a 5:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i)
}
```

### Loop `while`

O loop `while` é usado quando você não sabe quantas vezes o loop será executado, mas deseja que ele continue enquanto uma condição específica for verdadeira. A sintaxe básica é a seguinte:

```javascript
while (condição) {
    // bloco de código a ser repetido
}
```

Exemplo usando loop `while` para imprimir números de 1 a 5:

```javascript
let i = 1

while (i <= 5) {
    console.log(i)
    i++
}
```

## Exercícios e exemplos práticos

1. Somar todos os números em um intervalo;
2. Calcular a média de um conjunto de números;
3. Encontrar o maior número em um conjunto de números.

### PROPOSTA DE SOLUÇÕES

1. Somar todos os números em um intervalo:

```javascript
const somarIntervalo = (inicio, fim) => {
  let soma = 0

  for (let i = inicio; i <= fim; i++) {
    soma += i
  }

  return soma
}

// Exemplo de uso: somar todos os números de 1 a 10
const resultado = somarIntervalo(1, 10)

console.log(resultado) // Saída: 55
```

2. Calcular a média de um conjunto de números:

```javascript
const calcularMedia = (numeros) => {
  let soma = 0

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
  }

  return soma / numeros.length
}

// Exemplo de uso: calcular a média dos números [1, 2, 3, 4, 5]
const media = calcularMedia([1, 2, 3, 4, 5])

console.log(media) // Saída: 3
```

3. Encontrar o maior número em um conjunto de números:

```javascript
const encontrarMaiorNumero = (numeros) => {
  let maior = numeros[0]

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i]
    }
  }

  return maior
}

// Exemplo de uso: encontrar o maior número no array [1, 6, 3, 8, 5]
const maiorNumero = encontrarMaiorNumero([1, 6, 3, 8, 5])

console.log(maiorNumero) // Saída: 8
```
