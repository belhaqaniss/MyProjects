package fxml;
import static com.sun.org.apache.xalan.internal.lib.ExsltMath.power;
import java.time.LocalDate;

public class Abonne {
    protected String nom;
    protected String prenom;
    protected String d_nai;
    protected Object t_abo;
    protected boolean paye;
    protected String t_p;
    protected double taille;
    protected double poids;
    protected double new_poids;
    protected double imc;
    protected String g;
    public Abonne(){
    }
    public Abonne(String n, String p,String d_nai,Object t_abo, boolean paye,String prog,double t,double poids,double n_poids,String g){
        this.nom=n;
        this.d_nai=d_nai;
        this.paye=paye;
        this.prenom=p;
        this.t_abo=t_abo;
        this.t_p=prog;
        this.g=g;
        this.taille=t;
        this.poids=poids;
        this.new_poids=n_poids;
        this.imc=poids/power(t*power(10,-2),2);
    }
}
