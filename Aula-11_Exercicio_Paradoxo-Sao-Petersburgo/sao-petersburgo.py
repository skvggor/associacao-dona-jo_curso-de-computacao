import random
import locale

locale.setlocale(locale.LC_ALL, 'pt_BR.utf8')

def para_reais(valor):
    return locale.currency(valor, grouping=True)

def jogar():
    jogadas = 0

    while True:
        jogadas += 1

        # 0 representa "coroa" e 1 representa "cara"
        moeda = random.randint(0, 1)  # Gera 0 ou 1 aleatoriamente

        if moeda == 1:
            return 2 ** jogadas

def simulacao(numero_de_vezes, valor_da_aposta):
    total_retornado = 0

    for _ in range(numero_de_vezes):
        total_retornado += jogar()

    valor_apostado_total = numero_de_vezes * valor_da_aposta
    lucro = total_retornado - valor_apostado_total

    return (f"Valor apostado: {para_reais(valor_apostado_total)}\n"
            f"Valor retornado: {para_reais(total_retornado)}\n"
            f"Lucro: {para_reais(lucro)}")

print(simulacao(10, 1))  # Aqui 1 é o valor da aposta por jogo.
