
# Builder

É um padrão *criacional* que padroniza e facilita a criação de objetos.
Com ele, ocorre a separação entre a construção de um objeto e sua representação.
  
## Problema

Tomemos o exemplo de um sistema gerenciador de caixa numa loja. Você decidiu modelar cada compra com o objeto `Pedido`.
Cada pedido tem um `Cliente`, um `Vendedor` e uma lista de `Produtos`. Usando notação JSON fica algo como isto:

```JSON
{
    "pedido": {
        "cliente": {
            "id": "02",
            "nome": "Maria",
            "tel": "9 9665-4422"
        },
        "vendedor": {
            "id": "01",
            "nome": "João"
        },
        "produtos": [
            {
                "nome": "caderno",
                "quantidade": 1,
                "preço": 10.99
            },
            {
                "nome": "caneta",
                "quantidade": 2,
                "preço": 1.99
            }
        ]
    }
}
```

Isso já é um objeto complexo, de forma que preenchê-lo manualmente em vários locais diferentes pode ser verboso e trabalhoso.

## Solução

A ideia principal aqui é criar uma estrutura (classe ou função) responsável pela criação de instâncias de determinada classe.
O que nos permite dividir esse processo de construção em etapas.
Além disso, o mesmo processo deve ser escalável para diferentes objetos, por mais complexos que eles sejam.
Na verdade, quanto mais complexo a estrutura do objeto, mais útil é o uso de um Builder.

Na implementação em Java, foi criada uma classe na qual cada método é responsável por preencher uma parte do `Pedido`.

## Consequências

Uma desvantagem é a necessidade de implementar um Builder para cada tipo de dado.