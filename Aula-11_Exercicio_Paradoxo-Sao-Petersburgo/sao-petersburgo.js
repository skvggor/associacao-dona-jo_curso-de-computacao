const paraReais = (valor) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
}

const jogar = () => {
  let jogadas = 0

  while (true) {
    jogadas += 1

    // 0 representa "coroa" e 1 representa "cara"
    const moeda = Math.floor(Math.random() * 2) // Gera 0 ou 1 aleatoriamente

    if (moeda === 1) {
      return Math.pow(2, jogadas)
    }
  }
}

const simulacao = (numeroDeVezes, valorDaAposta) => {
  let totalRetornado = 0

  for (let i = 0; i < numeroDeVezes; i += 1) {
    totalRetornado += jogar()
  }

  const valorApostadoTotal = numeroDeVezes * valorDaAposta
  const lucro = totalRetornado - valorApostadoTotal

  return `Valor apostado: ${paraReais(valorApostadoTotal)}\nValor retornado: ${paraReais(totalRetornado)}\nLucro: ${paraReais(lucro)}`
}

console.log(simulacao(10, 1)) //Aqui 10 é o valor da aposta por jogo.
