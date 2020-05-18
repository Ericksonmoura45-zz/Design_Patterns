# State

É um padrão *comportamental* usado para fazer com que um objeto mude de comportamento dependendo de seu estado. Estado em alguns contextos pode ser interpretado como os valores atuais das variáveis internas de um objeto, não é o caso aqui. A analogia óbvia desse padrão é com o conceito de máquina de estados, usada pelos engenheiros para fazer máquinas de refrigerante.

É uma boa prática implementar os objetos State como singletons, mas o código fica gigante.

## Problema

Tomemos como exemplo um caixa eletrônico, essas máquinas que permitem o cliente de um banco retirar dinheiro e veja seu saldo. Ao usá-los, notamos que seu comportamento muda de acordo com as entradas do cliente. Podemos modelar o caixa genérico com os seguintes estados:

1. Esperar que o cartão seja inserido
1. Identificar banco do cartão
1. Esperar cliente escolher ação
1. Receber a senha pelo teclado numérico
1. Realizar ação escolhida, caso senha seja correta
1. Soltar o cartão
1. Retornar ao estado inicial

Quando organizamos os procedimentos em estados, podemos deixar bem definido quais partes do caixa estarão funcionando naquele momento e o quais requisitos devem ser cumpridos para dar continuidade. É possível notar as vantagens dessa abordagem:

- Podemos dar autonomia para cada estado deixando-o decidir se o teclado numérico deverá realizar leitura, se o cartão pode ser liberado, se a ação requer senha, etc.
- Haverá um reaprovitamento de código caso o programa realize um processo no qual o mesmo estado é executado mais de uma vez.
- Será mais fácil implementar um sistema complexo no qual os estados alternam-se indefinidamente.

## Solução

Usualmente criamos uma interface para os estados contendo as funções e variáveis communs a todos.

## Consequências

Em alguns casos o código pode aumentar drasticamente porém há maior controle sobre o fluxo de execução.

## Implementações

### Javascript

Foi criado um site com 3 botões toggles. Ao tentar seleciona os três ao mesmo tempo, um dele é escolhido aleatoriamente para ser desmarcado.

### C++

Foi criada uma máquina de estados que identifica se a palavra contém uma quantidade ímpar de 0s e uma quantidade par de 1s.

O diagrama de estados é visto abaixo:

![StateMachine](https://imgur.com/a/3NDhX03)
