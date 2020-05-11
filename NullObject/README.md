# Null Object

É um padrão *comportamental* comumente baseado em herança que visa definir um objeto de caráter neutro ou nulo. Em outras palavras, visa criar uma classe que modela como um objeto se *comportaria* caso ele fosse nulo. 

Esse padrão também ajuda a evitar que o valor `null` seja retornado quando um objeto é esperado, causando um `TypeError`.

## Problema

Em quase todo site e app de compras, é possível navegar pelo catálogo e possuir um carrinho mesmo que o usuário não possua uma conta no sistema. Ainda assim, algumas funcionalidades geralmente estão disponíveis para um usuário cadastrado mas não para um anônimo como avaliar um produto, por exemplo.

Dessa forma, o programador pode escolher modelar apenas o usuário com a classe `User` e, ao entrar no site, a variável que armazena o possível cliente seja definida inicialmente como `null` até que ele faça o cadastro. Optando por essa modelagem, o desenvolvedor estará condenando-se a realizar múltiplas checagens em várias parte do código para verificar se o usuário é um objeto `null` ou do tipo `User`, como exemplificado abaixo:

``` Javascript
/**
 * Buy button was pressed.
 *
 * If user isn't registered, show login form
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

Acima, vemos que o objeto do tipo `User` tem a função `proceedBuy()`. O if-else é necessário para que não seja executado o comando `this.user.proceedBuy()` quando `this.user` possui valor nulo, causando um `TypeError`.

## Solução

Como dito na introdução, agora sabemos da necessidade de criarmos uma segunda classe para modelar como um objeto se *comportaria* caso ele fosse nulo. No exemplo anterior, poderiamos criar a `NullUser` para representar o que seria um usuário nulo.

No exemplo abaixo, não há a preocupação com o valor de `this.user`, pois só há duas possibilidades para ele: ou é do tipo `User` ou do tipo `NullUser` e ambos têm as mesmas funçõs. Daí podemos concluir o motivo de haver implementações usando herança.

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

## Implementações

### Ionic 5 com Angular

Esta aplicação criada em Ionic 5 com Angular é um site de email fictício onde o usuário não registrado pode receber e-mails sem filtragem de spams, ambos aparecem misturados na caixa de entrada. Os usuários nulos também não podem abrir os e-mails para ler seu conteúdo.

Enquanto isso, o usuário logado, além de poder abrir o e-mails, tem os spams automaticamente direcionados para sua respectiva pasta.

Após instalar o pacote `ionic: ^5.4.16` local ou globalmente, entrar em Ionic5-Angular e executar `ionic serve`.
