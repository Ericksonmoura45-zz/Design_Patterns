# Delegate

É um padrão *comportalmental* que permite delegar a responsabilidade de um objeto classe a outro.

## Problema

Em nosso exemplo nada original considere a classe Conta, que guarda o valor da conta em Reais mas precisa informá-lo convertido em outras moedas.

```Java
public class Conta {
    public Double saldo;

    public Double converterDolar() {
        return saldo * 3.66;
    }
	
	public Double converterEuro() {
        return saldo * 4.21;
    }
}
```

O problema desse código (além das cotações fixas) é que temos de criar uma função pra cada moeda. Ao invés disso, podemos delegar (transferir) a responsabilidade de realizar as conversões para outra entidade. Vamos escolher fazer uma classe para cada tipo de moeda. 

## Solução

Primeiro, uma interface para nossa Conta receber um conversor genérico.

```Java
public interface Conversor {
    Double converter(Double valor);
}

public class Conta {
    public Double saldo;
    public Double converter(Conversor conversor){
        return conversor.converter(saldo);
    }
}
```

Agora os conversores:

```Java
public class DolarConverter implements Conversor {
    public Double converter(Double valor) {
        return valor * 3.66;
    }
}

public class EuroConverter implements Conversor {
    public Double converter(Double valor) {
        return valor * 4.21;
    }
}
```

## Consequências

Implementação é bem barata.

## Implementações

### Java

TODO: Fazer o mesmo exemplo acima.