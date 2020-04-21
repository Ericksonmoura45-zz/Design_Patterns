# Observer

É um padrão *comportamental* que define uma dependência "um-para-muitos" entre objetos de modo que, quando um muda o estado, todos seus dependentes (observers) são notificados.

## Problema

Suponha que temos um programa que representa vários gráficos de uma pesquisa científica e utiliza vários dados para representar esse gráfico, e se um dado for atualizado o programa deve atualizar os gráficos. Para esse problema, uma solução poderia ser manter uma lista com as possíveis representações e ficar verificando por mudanças nos conjuntos de dados, assim que fosse feita mudança, as representações que está na lista seriam avisadas.

Essa solução não é a melhor pois precisamos sempre verificar se houve essas mudanças no conjunto, e dessa forma o processamento seria muito caro, ou então a atualização seria demorada.

## Solução



## Consequências

Complexidade de entendimento do código aumenta.
