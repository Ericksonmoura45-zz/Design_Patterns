package no.delegate;

class Main {
    public static void main(String [] args) {
        Conta c = new Conta(1800);
        System.out.println("Saldo da conta: " + c.saldo);
        System.out.println("Saldo em Dollar: " + c.toDollar());
        System.out.println("Saldo em Euro: " + c.toEuro());
    }
}
