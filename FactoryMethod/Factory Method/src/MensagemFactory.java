
public class MensagemFactory {
    public static Mensagem getMensagem(int i){
        if(i == 1){
            return new MensagemSMS();
        }
        else if(i == 2){
            return new MensagemEmail();
        }
        else{
            return new MensagemSMS();
        }
    }
}
