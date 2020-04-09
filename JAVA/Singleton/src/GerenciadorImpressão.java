public class GerenciadorImpressão {

    /* Todos os objetos deve ter o mesmo endereço de memória*/

    private static GerenciadorImpressão gerenciadorImpressão;
    private GerenciadorImpressão(){

    }
    public static GerenciadorImpressão getInstance(){
        if(gerenciadorImpressão == null) {
            gerenciadorImpressão = new GerenciadorImpressão();
        }
        return gerenciadorImpressão;
    }
}

/* TODOS OS OBJETOS NA MESMA INSTÂNCIA, NÃO IMPORTANDO QUANTOS OBJETOS SEJAM! */
