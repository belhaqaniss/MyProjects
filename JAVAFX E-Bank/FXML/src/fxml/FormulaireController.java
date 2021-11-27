package fxml;

import static com.sun.org.apache.xalan.internal.lib.ExsltMath.power;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.control.DatePicker;
import javafx.scene.control.RadioButton;
import javafx.scene.control.TextField;
import javafx.scene.control.ToggleGroup;
import fxml.Abonne;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDate;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

public class FormulaireController implements Initializable {

    @FXML
    private Button reset;
    @FXML
    private Button reg;
    @FXML
    private TextField nom;
    @FXML
    private TextField prenom;
    @FXML
    private DatePicker myDate;
    @FXML
    private ComboBox<String> cboOptions;
    @FXML
    private RadioButton Min;
    @FXML
    private RadioButton Rf;
    @FXML
    private RadioButton Pdm;
    @FXML
    private AnchorPane Formul;
    @FXML
    private ToggleGroup Prog;
    @FXML
    private TextField taille;
    @FXML
    private TextField poids;
    @FXML
    private TextField new_poids;
    @FXML
    private ToggleGroup genre;

    

    @FXML
    private void handleresetAction(ActionEvent event) throws IOException {
        Parent Gest_root = FXMLLoader.load(getClass().getResource("Formulaire.fxml"));
                    
        Scene scene = new Scene(Gest_root);
        Stage stage= (Stage) ((Node)event.getSource()).getScene().getWindow();
        stage.setScene(scene);
        stage.show();
    }

    @FXML
    private void handleregAction(ActionEvent event) throws IOException, SQLException { 
        Abonne Ab=new Abonne();
        FXMLLoader fxmlLoader=new FXMLLoader();
        fxmlLoader.setLocation(getClass().getResource("Gestion.fxml"));
        Parent Gest_root = fxmlLoader.load();
        RadioButton chk = (RadioButton)Prog.getSelectedToggle();
        RadioButton chk2 = (RadioButton)genre.getSelectedToggle();
        LocalDate date = myDate.getValue();
        Connection con = DataConnection.getConnection();
        PreparedStatement pst = null; 
        String f=Boolean.toString(false);
        double imc=Double.valueOf(poids.getText())/power(Double.valueOf(taille.getText())*power(10,-2),2);
            try {
                String sql = "INSERT INTO l_ab(nom,prenom,d_nai,t_abo,paye,t_p,taille,poids,new_p,genre,imc) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
                pst = con.prepareStatement(sql);
                pst.setString(1, nom.getText());
                pst.setString(2, prenom.getText());
                pst.setString(3, date.toString());
                pst.setString(4, cboOptions.getValue());
                pst.setString(5,f);
                pst.setString(6, chk.getText());
                pst.setString(7, taille.getText());
                pst.setString(8, poids.getText());
                pst.setString(9, new_poids.getText());
                pst.setString(10, chk2.getText());
                pst.setString(11,Double.toString(imc));
                pst.executeUpdate();
                System.out.println("Data has been inserted!");
                } catch(SQLException e) {
                    System.out.println(e.toString());
                    } finally {
                        try{
                            pst.close();
                            con.close();
                      } catch(SQLException e) {
                            System.out.println(e.toString());
                      }
        
        GestionController gc=fxmlLoader.getController();
        Scene scene = new Scene(Gest_root);
        Stage stage= (Stage) ((Node)event.getSource()).getScene().getWindow();
        stage.setScene(scene);
        stage.show();
    }
    
    

    
 }

    @Override
    public void initialize(URL location, ResourceBundle resources) {
       cboOptions.getItems().removeAll(cboOptions.getItems());
      cboOptions.getItems().addAll("Mensuel", "Trimestriel", "Annuel");
    }
}

