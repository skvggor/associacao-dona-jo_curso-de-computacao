#!/usr/bin/env python3

# LOOPS

# ------------------------------------------------------------
# 1 a 5
for i in range(1, 6):
  print(i)

# 0 a 4
for i in range(5):
  print(i)

# pares de 0 a 10
for i in range(0, 11, 2):
  print(i)

# ------------------------------------------------------------
# mesmas coisas com while

# 1 a 5
i = 1
while i <= 5:
  print(i)
  i += 1

# 0 a 4
i = 0
while i < 5:
  print(i)
  i += 1

# pares de 0 a 10
i = 0
while i <= 10:
  print(i)
  i += 2

# ------------------------------------------------------------
while True:
    # Peça ao usuário para entrar com um número
    numero = int(input("Digite um número maior ou igual a 0 para ver a sua tabuada: "))

    # Verifique se o número é negativo
    if numero < 0:
        print("Número inválido! O número deve ser maior ou igual a 0.")
        continue

    # Peça ao usuário até qual número ele quer ver a tabuada
    ate = int(input("Digite até qual número (entre 0 e 100) você quer ver a tabuada: "))

    # Verifique se o número está dentro do intervalo desejado
    if ate < 0 or ate > 100:
        print("Número inválido! Por favor, digite um número entre 0 e 100.")
        continue

    # Use um loop for para imprimir a tabuada desse número até o número que o usuário pediu
    for i in range(1, ate + 1):
        print(f"{numero} X {i} = {numero * i}")

    break  # Sai do loop
