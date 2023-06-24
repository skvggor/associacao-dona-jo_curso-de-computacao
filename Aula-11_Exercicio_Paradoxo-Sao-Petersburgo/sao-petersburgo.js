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

const loadingEffect = async () => {
  process.stdout.write("Calculando o resultado...")

  const SECONDS = 5

  for (let i = 0; i < SECONDS; i += 1) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    process.stdout.write('.')
  }

  process.stdout.write("\n" + simulacao(10, 1)) // Aqui 1 é o valor (R$) da aposta por jogo e 10 são quantas vezes vamos jogar.
}

loadingEffect()
