package no.delegate;

/**
 * Conta bancária
 *
 * Guarda saldo e converte para Dollar e Euro.
 * Se quiser adicionar outros tipos de moedas, terá de adicionar mais funções.
 */
class Conta {
    double saldo;

    Conta(double saldo) {
        this.saldo = saldo;
    }

    double toDollar(){
        return this.saldo * 5.00;
    }

    double toEuro() {
        return this.saldo * 10.00;
    }
}
