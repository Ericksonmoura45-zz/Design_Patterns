import javax.swing.JOptionPane;

public class Principal {
    public static void main(String[] args) {
        String texto = JOptionPane.showInputDialog(null);

        Mensagem mensagem = MensagemFactory.getMensagem(1);
        mensagem.enviar(texto);
    }
}
