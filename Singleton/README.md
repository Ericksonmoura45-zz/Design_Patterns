# Singleton

O padrão de projeto mais fácil de entender.

## Problema

## Solução

Geralmente os passos para implementar é:

1. Deixar o construtor privado, pois assim ninguém deve conseguir instanciar a classe, apenas o próprio Singleton.

1. Criar um atributo privado e estático do mesmo tipo da classe (instance). Algumas linguagens não tipadas não irão precisar do tipo, caso do PHP, por exemplo.

1. Método `getInstance()` é o principal ponto da classe. Ele verifica se a variável instance já foi iniciada, caso não tenha sido, ele faz sua criação pela primeira e única vez.

1. Para fazer a conexão, devemos chamar o getInstance da seguinte forma: ClasseSingleton.`getInstance()`.

## Consequências

O custo de implementar um singleton é muito barato, mas deve-se tomar cuidado quanto à quando usá-lo. Caso você decida que certa classe não deve mais ser singleton, poderá ser necessário um grande esforço para adaptar o código.

## Implementações

### Java

Foi criada a classe `GerenciadorImpresssao` que só pode ser instanciada uma única vez.

### Typescript

Criamos um exemplo totalmente abstrato. Há duas classes no `single.ts`: a `NormalClass` e a `UniqueObjClass`. Execute o arquivo local ou entre no site [TypeScript Playground](https://www.typescriptlang.org/play/?ssl=1&ssc=1&pln=54&pc=40#code/PTAqE8AcFMGcGMBOBLSAXABABQDYENwBzRAewFcA7AEwC4MALNNSWGkAd04Do0o4lUafBUJcSiQsEj5wwAFByQGAHIB5UBgCqAZQCSygOIY9hgDIBRUKuVz4+WLBXiAtnhwBhe44DecjP4wKPGdoOlg0FBEMAF4MAHI4gG4-APgSCnDEMng0cQAKAEoMbwwAXwUAjFhoTGq0ZWDoPIowiOQRIt9KyrR6ZFguIJCYwOTK8vLbdPDAlzcAQRGKaHYnRFcPL0LkijmcecHGkYADedIKY+S0jMxd9bcAISWVtY3PPAdtuTuNh8Ph2LHB7QPCXBTXWAkHDQLg4EiEPJxH4LQKNOhxAA0s3u+3+0AKV2mUJhcIRSL2TyGoXiWOROD+VIJUwyxNh8Oae0W0VidKeAH54nSuTyKXEMOihRgAIQinEPOJMhQKJQ6fRGEwGCxWGx2D6OTQUZAARzI0FUACMAFbvBzFFL+SAoABueDQ0AwlGNpotlugOToBq9ZqtNtgYwCVNakUIIwSyXtGCUjuQLrdGAhEWyuUQVRIGGQmHgeAocUw5vd7XCxfgyFd0CoGHYBfogpegZNwetWwKcQTydT7ozWRy+U6ZQqATqVRqDRCzSj7UInQTPT6AypS3D-kmlUINV0N2rTQKAcNHZ9obt3QCyAAZhg8r1+lxPeerX7MNzAmQcDhl9fryfAZX29d8cmeVZ21Ars9S+ADx3gxAajIRAKAwICXzPaCPy3cdJmhTA0GQEJTyDC8vGSIiAS0LDO1DLhHRIXJeBgLg9zQA8qwoeBj0o4iYQ3WI4jwJIFAIjBnHSaBwFIt8YIcZJJOWcARiguivAY0hmL4Nj90PbjeLkJTpLxWNzVE5lIWhNkySo91IxpdD+LxJkIVZUlEWMlSHMxCSpPAFzCRZayPLsmJYi8jABVLfjwr85SxXRMKZXi6SFSCqySXZY4AEUyBIBtoEQV0MCoaAlMyYsqDIZwuGOAogA), e veja o console do navegador.
