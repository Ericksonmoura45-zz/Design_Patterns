public class Main {
    public static void main(String[] args) {
        //PADRÃO SINGLETON
        // Não permite que haja 2 ou mais instâncias de determinada classe no projeto
        GerenciadorImpressão g1 = GerenciadorImpressão.getInstance();
        GerenciadorImpressão g2 = GerenciadorImpressão.getInstance();
        GerenciadorImpressão g3 = GerenciadorImpressão.getInstance();
        GerenciadorImpressão g4 = GerenciadorImpressão.getInstance();

        System.out.println(g1);
        System.out.println(g2);
        System.out.println(g3);
        System.out.println(g4);
    }
}
