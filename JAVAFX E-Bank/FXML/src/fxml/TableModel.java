
package fxml;

public class TableModel {
    protected String nom;
    protected String prenom;
    protected boolean paye;
    protected String t_p;
    public TableModel(){
    }
    public TableModel(String n,String pre,boolean paye,String t_p){
        this.nom=n;
        this.paye=paye;
        this.prenom=pre;
        this.t_p=t_p;
    }

}
