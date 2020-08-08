package using.delegate;

public class Main {
    public static void main(String[] args) {
        Conta c = new Conta(1900);

        System.out.println("Saldo da conta: " + c.saldo);
        System.out.println("Saldo em Dollar:" + c.converter(new ConversorDollar()));
        System.out.println("Saldo em Euro:" + c.converter(new ConversorEuro()));
    }
}
