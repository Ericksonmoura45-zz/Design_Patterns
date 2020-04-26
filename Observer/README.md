# Observer

É um padrão *comportamental* que define uma dependência "um-para-muitos" entre objetos de modo que, quando um muda o estado, todos seus dependentes (observers) são notificados.

## Problema

Suponha que temos um programa que apresenta vários gráficos de uma pesquisa científica e utiliza vários dados obtidos em tempo real, se um dado for atualizado o programa deve atualizar instantaneamente os gráficos. Para esse problema, uma solução seria criar um função que periodicamente verifica se houve alguma mudança na base de dados. Assim que ela fosse detectada, os gráficos seriam atualizados.

Essa solução não é a melhor pois precisamos sempre verificar se houve essas mudanças no conjunto. Existem alternativas que cumprem o mesmo objetivo demandando menor esforço computacional.

## Solução

A ideia geral é criar um objeto chamado "sujeito" capaz de alertar aos seus "observadores" após a ocorrêcia de um evento. Os objetos observadores podem executar uma tarefa de acordo com o alerta enviado.

Para resolver o problema dos gráficos em tempo real proposto, o objeto que adquire os dados pode ser o sujeito e os gráficos seus observadores. Agora, nenhum componente da interface precisa ficar monitorando a base de dados. Sempre que houver mudança, somente o gráfico que precisa ser atualizado é notificado com o novo valor.

## Consequências

Complexidade de entendimento do código aumenta.

## Implementação

### Javascript

Foi criado um site contendo várias listas de caracteres. Cada lista observa o evento 'keyup' do teclado e inserem em seu fim o caractere pressionado. O usário pode escolher a qualquer momento se determinada lista observa ou não o teclado.
