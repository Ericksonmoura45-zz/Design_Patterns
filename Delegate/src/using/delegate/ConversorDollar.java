package using.delegate;

class ConversorDollar implements Conversor {
    @Override
    public double converter(double saldo) {
        return saldo*5.00;
    }
}
