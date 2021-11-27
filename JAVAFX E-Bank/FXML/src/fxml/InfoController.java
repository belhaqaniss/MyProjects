
package fxml;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.fxml.Initializable;
import fxml.Abonne;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

public class InfoController implements Initializable {

    @FXML
    private ComboBox<String> Inf_ch;
    @FXML
    private Button ok;
    @FXML
    private AnchorPane ch_inf;
    
    @FXML
    private void handleinfAction(ActionEvent event) throws IOException {
        FXMLLoader fxmlloader=new FXMLLoader();
        fxmlloader.setLocation(getClass().getResource("Gestion.fxml"));
        Parent Gest_root = fxmlloader.load();
        
        GestionController GC=fxmlloader.getController();
        
        Scene scene = new Scene(Gest_root);
        Stage stage= (Stage) ((Node)event.getSource()).getScene().getWindow();
        stage.setScene(scene);
        stage.show();
    }
     
    @Override
    public void initialize(URL url, ResourceBundle rb) {
    }    
    
    void iniData(ArrayList<String> l_ab,int in) throws IOException {
       Inf_ch.getItems().removeAll(Inf_ch.getItems());
       for(String Np:l_ab){
            Inf_ch.getItems().addAll(Np);
       }
      switch(in){
          case 1:
              String NP;
              try {
                Connection con=DataConnection.getConnection();
                ResultSet rs=con.createStatement().executeQuery(" select * from l_ab");
                while(rs.next()){
                    NP=rs.getString("nom");
                    NP+=" ";
                    NP+=rs.getString("prenom");
                    if(NP.equals(Inf_ch.getValue())){
                        Abonne ab;
                        ab = new Abonne(rs.getString("nom"),rs.getString("prenom"),rs.getString("d_nai"),rs.getString("t_abo"),rs.getBoolean("paye"),rs.getString("t_p"),rs.getDouble("taille"),rs.getDouble("poids"),rs.getDouble("new_p"),rs.getString("genre"));
                        Alert alert = new Alert(Alert.AlertType.INFORMATION);
                        alert.setTitle("Informations");
                        alert.setHeaderText("Informations de l'Abonné");
                        if(!ab.paye){
                            if(ab.t_p.equals("Prise de masse")){
                                alert.setContentText("Nom: "+ ab.nom +"\nPrénom: " +ab.prenom+"\nSexe :"+ab.g+"\nDate de naissance: "+ab.d_nai+"\nTaille :"+ab.taille+"\nPoids"+ab.poids+"\nType d'abonnement: "+ab.t_abo+"\nObjectif :"+ab.new_poids+"\nType de programme: "+ ab.t_p+"\nPayé: Non");
                                alert.showAndWait();
                                FXMLLoader fxmlloader=new FXMLLoader();
                                fxmlloader.setLocation(getClass().getResource("Pdm.fxml"));
                                Parent Gest_root = fxmlloader.load();
        
                                PdmController GC=fxmlloader.getController();
        
                                Scene scene = new Scene(Gest_root);
                                Stage stage=new Stage();
                                stage.setScene(scene);
                                stage.show();
                            }else if(ab.t_p.equals("Minceur")){
                                alert.setContentText("Nom: "+ ab.nom +"\nPrénom: " +ab.prenom+"\nDate de naissance: "+ab.d_nai+"\nType d'abonnement: "+ab.t_abo+"\nType de programme: "+ ab.t_p+"\nPayé: Non");
                                alert.showAndWait();
                                FXMLLoader fxmlloader=new FXMLLoader();
                                fxmlloader.setLocation(getClass().getResource("Minc.fxml"));
                                Parent Gest_root = fxmlloader.load();
        
                                MincController GC=fxmlloader.getController();
        
                                Scene scene = new Scene(Gest_root);
                                Stage stage=new Stage();
                                stage.setScene(scene);
                                stage.show();
                            }else{
                                alert.setContentText("Nom: "+ ab.nom +"\nPrénom: " +ab.prenom+"\nDate de naissance: "+ab.d_nai+"\nType d'abonnement: "+ab.t_abo+"\nType de programme: "+ ab.t_p+"\nPayé: Non");
                                alert.showAndWait();
                                FXMLLoader fxmlloader=new FXMLLoader();
                                fxmlloader.setLocation(getClass().getResource("Remi.fxml"));
                                Parent Gest_root = fxmlloader.load();
        
                                RemiController GC=fxmlloader.getController();
        
                                Scene scene = new Scene(Gest_root);
                                Stage stage=new Stage();
                                stage.setScene(scene);
                                stage.show();
                            }
                        }else{
                            if(ab.t_p.equals("Prise de masse")){
                                alert.setContentText("Nom: "+ ab.nom +"\nPrénom: " +ab.prenom+"\nDate de naissance: "+ab.d_nai+"\nType d'abonnement: "+ab.t_abo+"\nType de programme: "+ ab.t_p+"\nPayé: Oui");
                                alert.showAndWait();
                                FXMLLoader fxmlloader=new FXMLLoader();
                                fxmlloader.setLocation(getClass().getResource("Pdm.fxml"));
                                Parent Gest_root = fxmlloader.load();
        
                                PdmController GC=fxmlloader.getController();
        
                                Scene scene = new Scene(Gest_root);
                                Stage stage=new Stage();
                                stage.setScene(scene);
                                stage.show();
                            }else if(ab.t_p.equals("Minceur")){
                                alert.setContentText("Nom: "+ ab.nom +"\nPrénom: " +ab.prenom+"\nDate de naissance: "+ab.d_nai+"\nType d'abonnement: "+ab.t_abo+"\nType de programme: "+ ab.t_p+"\nPayé: Oui");
                                alert.showAndWait();
                                FXMLLoader fxmlloader=new FXMLLoader();
                                fxmlloader.setLocation(getClass().getResource("Minc.fxml"));
                                Parent Gest_root = fxmlloader.load();
        
                                MincController GC=fxmlloader.getController();
        
                                Scene scene = new Scene(Gest_root);
                                Stage stage=new Stage();
                                stage.setScene(scene);
                                stage.show();
                            }else{
                                alert.setContentText("Nom: "+ ab.nom +"\nPrénom: " +ab.prenom+"\nDate de naissance: "+ab.d_nai+"\nType d'abonnement: "+ab.t_abo+"\nType de programme: "+ ab.t_p+"\nPayé: Oui");
                                alert.showAndWait();
                                FXMLLoader fxmlloader=new FXMLLoader();
                                fxmlloader.setLocation(getClass().getResource("Remi.fxml"));
                                Parent Gest_root = fxmlloader.load();
        
                                RemiController GC=fxmlloader.getController();
        
                                Scene scene = new Scene(Gest_root);
                                Stage stage=new Stage();
                                stage.setScene(scene);
                                stage.show();
                            }
                        }
                    }
                    break;
            }
        } catch (SQLException ex) {
            Logger.getLogger(GestionController.class.getName()).log(Level.SEVERE, null, ex);
        }
              break;
          case 2:
             break; 
      } 
    }

    
}
