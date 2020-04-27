import javax.swing.*;

public class MensagemSMS implements Mensagem{
    @Override
    public void enviar(String mensagem) {
        JOptionPane.showMessageDialog(null, "SMS: "+mensagem);
    }
}
