package using.delegate;

public class Conta {
    double saldo;

    Conta(double saldo) {
        this.saldo = saldo;
    }

    double converter(Conversor conv){
        return conv.converter(saldo);
    }
}
