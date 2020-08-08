package using.delegate;

public class ConversorEuro implements Conversor {
    @Override
    public double converter(double saldo) {
        return saldo*10.00;
    }
}
