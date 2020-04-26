# Null Object

É um padrão *comportamental* baseado em herança que visa definir um objeto de caráter neutro dentro da aplicação. Desse modo, evita-se que o valor `null` seja retornado quando um objeto é esperado.

## Problema

Em quase todo site e app de compras, é possível navegar pelo catálogo e possuir um carrinho mesmo que o usuário não possua uma conta no sistema. Algumas funcionalidades geralmente estão disponíveis para um usuário cadastrado mas não para um anônimo como, por exemplo, avaliar um produto.

Sendo assim, programador pode escolher modelar apenas o usuário com a classe `User` e, ao entrar no site, a variável que armazena o possível cliente seja definida como `null` até que ele faça o cadastro. Optando por essa modelagem, o desenvolvedor está condenando-se a realizar múltiplas checagens em várias parte do código para verificar se o usuário é um objeto `null` ou do tipo `User`, como exemplificado abaixo:

``` Javascript
/**
 * Buy button was pressed.
 *
 * If user not registered, show login form
 * If user is registered, proceed to next buy step
 * Imagine that same if-else in various functions of your code
 */
function buy() {
    if (this.user == null) {
        this.loginForm();
    } else {
        this.user.proceedBuy();
    }
}
```

Acima, vemos que o objeto do tipo `User` tem a função `proceedBuy()`. O if-else é necessário para que não seja executado o comando `this.user.proceedBuy()` quando `this.user` possui valor nulo, causando assim um `TypeError`.

## Solução

Criaremos outra classe para modelar como um objeto se *comportaria* caso ele fosse nulo. No exemplo anterior, poderiamos modelar um cliente nulo com a classe `NullUser`, por exemplo.

``` Javascript
/**
 * Buy button was pressed.
 * 
 * If user is instance of NullUser, show login form
 * If user is instance of User, proceed to next buy step
 * Don't worry, both classes has a proceedBuy(), but each do different things
 */
function buy() {
    this.user.proceedBuy();
}
```

## Consequências

Você terá pelo menos uma classe a mais para cada tipo de objeto potencialmente nulo, mas ajudará na organização do código ao reduzir a repetição.

## Implementação

### Ionic 5 com Angular

Esta aplicação criada em Ionic 5 com Angular é um site de email fictício onde o usuário não registrado pode receber e-mails sem filtragem de spams, ambos aparecem misturados na caixa de entrada. Os usuários nulos também não podem abrir os e-mails para ler seu conteúdo.

Enquanto isso, o usuário logado, além de poder abrir o e-mails, tem os spams automaticamente direcionados para sua respectiva pasta.

Após instalar o pacote `ionic: ^5.4.16` local ou globalmente, entrar em Ionic5-Angular e executar `ionic serve`.
