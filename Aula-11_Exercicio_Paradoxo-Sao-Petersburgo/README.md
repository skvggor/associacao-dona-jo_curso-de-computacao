# Exercício: Paradoxo de São Petersburgo

O Paradoxo de São Petersburgo é um problema clássico no estudo da teoria da probabilidade, teoria da utilidade e economia comportamental. Foi formulado por Daniel Bernoulli em 1738.

Imagine um jogo de aposta. A moeda é jogada até que ocorra o primeiro cara. Se o primeiro cara aparecer na primeira jogada, você ganha $2. Se aparecer na segunda jogada, você ganha $4. Se aparecer na terceira jogada, você ganha $8, e assim por diante. Assim, depois de n jogadas, você ganharia $2^n.

Então, qual é o valor esperado deste jogo? O valor esperado é a soma dos produtos da probabilidade de cada resultado pelo valor de cada resultado. No caso do jogo de São Petersburgo:

- Há uma chance de 1/2 de que o primeiro cara ocorra na primeira jogada, então você ganha $2. O valor esperado dessa parte é 1/2 \* $2 = $1.
- Há uma chance de 1/4 de que o primeiro cara ocorra na segunda jogada, então você ganha $4. O valor esperado dessa parte é 1/4 \* $4 = $1.
- Há uma chance de 1/8 de que o primeiro cara ocorra na terceira jogada, então você ganha $8. O valor esperado dessa parte é 1/8 \* $8 = $1.
- E assim por diante, adicionando $1 a cada vez.

Quando você soma todos esses valores esperados, o valor esperado do jogo é, teoricamente, infinito. No entanto, na realidade, as pessoas não estariam dispostas a pagar uma quantia infinita para jogar este jogo. Na verdade, a maioria das pessoas só pagaria uma quantia muito pequena para jogar. Este é o paradoxo.

Bernoulli resolveu o paradoxo propondo que, em vez de valorizar o dinheiro linearmente, as pessoas valorizam o dinheiro logaritmicamente. Isso significa que cada dólar adicional que você ganha é um pouco menos valioso para você do que o dólar anterior. Este é o princípio da utilidade marginal decrescente. Quando você aplica este princípio ao jogo de São Petersburgo, o valor esperado do jogo se torna finito, resolvendo o paradoxo.
