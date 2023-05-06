# Arrays: organizando dados em listas

Arrays são estruturas de dados que podem armazenar uma ampla variedade de elementos, incluindo números, strings e objetos. Organizados de forma linear e unidimensional, eles são um componente essencial na programação com JavaScript.

Em seguida, mergulharemos em algumas das operações mais comuns e úteis que você pode realizar com arrays, expandindo seu arsenal de habilidades de programação.

*Adendo: Enquanto arrays são estruturas unidimensionais, as matrizes apresentam uma organização bidimensional. No entanto, é possível simular matrizes combinando arrays dentro de arrays, criando o que chamamos de arrays multidimensionais.*

## Operações com Arrays

### 1. Adicionar elementos

#### **push**: Adiciona um ou mais elementos ao final do array.

```javascript
      const instrumentos = ['atabaque', 'berimbau']

      instrumentos.push('pandeiro')

      console.log(instrumentos) // ['atabaque', 'berimbau', 'pandeiro']
```


#### **unshift**: Adiciona um ou mais elementos no início do array.

```javascript
      const instrumentos = ['atabaque', 'berimbau']

      instrumentos.unshift('pandeiro')

      console.log(instrumentos) // ['pandeiro', 'atabaque', 'berimbau']
```

### 2. Remover elementos

#### **pop**: Remove o último elemento do array e retorna o elemento removido.

```javascript
      const instrumentos = ['atabaque', 'berimbau', 'pandeiro']

      const ultimoInstrumento = instrumentos.pop()

      console.log(ultimoInstrumento) // 'pandeiro'
```


#### **shift**: Remove o primeiro elemento do array e retorna o elemento removido.

```javascript
      const instrumentos = ['atabaque', 'berimbau', 'pandeiro']

      const primeiroInstrumento = instrumentos.shift()

      console.log(primeiroInstrumento) // 'atabaque'
```

### 3. Encontrar elementos

#### **indexOf**: Retorna o índice do primeiro elemento encontrado no array ou `-1` se o elemento não for encontrado.

```javascript
      const instrumentos = ['atabaque', 'berimbau', 'pandeiro']

      const indiceBerimbau = instrumentos.indexOf('berimbau')

      console.log(indiceBerimbau) // 1
```


#### **includes**: Retorna `true` se o elemento estiver presente no array, e `false` caso contrário.

```javascript
      const instrumentos = ['atabaque', 'berimbau', 'pandeiro']

      const possuiPandeiro = instrumentos.includes('pandeiro')

      console.log(possuiPandeiro) // true
```

### 4. Iterar sobre elementos

#### **forEach**: Executa uma função para cada elemento do array.

```javascript
      const dancas = ['samba', 'maracatu', 'axé']

      dancas.forEach(danca => console.log(danca))
```


#### **map**: Cria um novo array com os resultados da chamada de uma função para cada elemento do array original.

```javascript
      const comidas = ['acarajé', 'vatapá', 'caruru']

      const comidasMaiusculas = comidas.map(comida => comida.toUpperCase())

      console.log(comidasMaiusculas) // ['ACARAJÉ', 'VATAPÁ', 'CARURU']
```

### 5. Filtrar elementos

#### **filter**: Cria um novo array contendo todos os elementos que satisfazem uma determinada condição.

```javascript
      const nomes = ['João', 'Dandara', 'Maria', 'Zumbi']

      const nomesAfroBrasileiros = nomes.filter(nome => ['Dandara', 'Zumbi'].includes(nome))

      console.log(nomesAfroBrasileiros) // ['Dandara', 'Zumbi']
```

### 6. Reduzir elementos

#### **reduce**: Aplica uma função acumuladora sobre os elementos do array, da esquerda para a direita, e retorna o valor acumulado.

```javascript
      const notas = [4, 5, 6, 7]

      const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0)

      console.log(somaNotas) // 22
```

### 7. Concatenar arrays

#### **concat**: Retorna um novo array resultante da concatenação de um ou mais arrays.

```javascript
      const frutas1 = ['banana', 'manga']
      const frutas2 = ['abacaxi', 'acerola']

      const frutasConcatenadas = frutas1.concat(frutas2)

      console.log(frutasConcatenadas) // ['banana', 'manga', 'abacaxi', 'acerola']
```

### 8. Ordenar elementos

#### **sort**: Ordena os elementos de um array de acordo com a ordem lexicográfica (ou seja, como se fossem strings) e retorna o array ordenado. Também é possível fornecer uma função de comparação como argumento para personalizar a ordenação.

```javascript
      const numeros = [10, 5, 8, 1, 7]
      const strings = ['banana', 'maçã', 'abacaxi', 'laranja']

      // Ordenação lexicográfica (https://en.wikipedia.org/wiki/Lexicography)
      numeros.sort()
      console.log(numeros) // [1, 10, 5, 7, 8]

      strings.sort()

      console.log(strings) // ['abacaxi', 'banana', 'laranja', 'maçã']

      // Ordenação numérica
      numeros.sort((a, b) => a - b)

      console.log(numeros) // [1, 5, 7, 8, 10]
```

### 9. Inverter a ordem dos elementos

#### **reverse**: Inverte a ordem dos elementos de um array e retorna o array modificado.

```javascript
      const frutas = ['banana', 'maçã', 'abacaxi', 'laranja']

      frutas.reverse()

      console.log(frutas) // ['laranja', 'abacaxi', 'maçã', 'banana']
```

### 10. Extrair parte de um array

#### **slice**: Retorna uma cópia de parte de um array, delimitada por dois índices. O array original não é modificado.

```javascript
      const numeros = [1, 2, 3, 4, 5]

      const subarray = numeros.slice(1, 4)

      console.log(subarray) // [2, 3, 4]
```

### 11. Adicionar e remover elementos

#### **splice**: Remove e/ou adiciona elementos em um array. Modifica o array original e retorna um array contendo os elementos removidos.

```javascript
      const numeros = [1, 2, 3, 4, 5]

      // Remover elementos
      const removidos = numeros.splice(1, 2)

      console.log(removidos) // [2, 3]
      console.log(numeros) // [1, 4, 5]

      // Adicionar elementos
      numeros.splice(1, 0, 6, 7)
      console.log(numeros) // [1, 6, 7, 4, 5]
```
