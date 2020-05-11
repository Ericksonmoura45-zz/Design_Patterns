
# Factory

É um padrão *criacional* que permite ao programador a criação de um objeto cujo tipo não é definido desde a programação, mas decidido em tempo de excecução.

Não use o Factory Method para construir todos os objetos daqui pra frente. Ele não é necessário caso a classe sendo instanciada nunca vai mudar.

## Problema

A analogia óbvia é com uma fábrica, que geralmente não sabe previamente quais produtos devem ser produzidos. Uma fábrica de carros, por exemplo, pode construir diferentes modelos usado os mesmos meios e métodos. Da Volkswagen pode sair tanto um Golzinho quanto um fodendo Amarok. Porém, ela tem de ser adaptada à dois tipos de situações:

- Novos modelos de carros podem surgir, ou seja, futuramente podemos querer que a fábrica produza outros tipos de objetos.

- Os meios de produção podem mudar, isto é, a fábrica pode sofrer eventuais manutenções internas sem que isso interrompa ou comprometa a produção.

Diferentemente da Volkswagen, que todo dia sabe exatamente quantos objetos tem de criar, os programadores usam o este padrão justamente em situações nas quais não é possível saber de ante-mão qual tipo será necessário. Daí a necessidade de uma função capaz de produzir diferentes tipos, para que decidamos em tempo de execução.

## Solução

O idealizado foi a criação de um método que decide qual tipo de instância criar. O escopo da função

```Javascript
class Image {}

class PNGImage {}
class JPGImage {}
class GIFImage {}

function createImage(type) {
    const supportedImgTypes = {
        jpg: JGPImage,
        png: PNGImage,
        gif: GIFImage,
    };
    return new (supportedImgTypes[type] || Image)();
}

```

## Consequências

## Implementações
