package fxml;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

public class LogInController implements Initializable {
    
    @FXML
    private Button button;
    @FXML
    private PasswordField MDP;
    @FXML
    private TextField ID;
    @FXML
    private AnchorPane Login;
    
    @FXML
    private void handleButtonAction(ActionEvent event) throws IOException {
        if(ID.getText().equals("GM")&&MDP.getText().equals("1234")){
                          
            Parent Gest_root = FXMLLoader.load(getClass().getResource("Gestion.fxml"));
                    
            Scene scene = new Scene(Gest_root);
            Stage stage= (Stage) ((Node)event.getSource()).getScene().getWindow();
            stage.setScene(scene);
            stage.show();
        }else{
            Parent Gest_root = FXMLLoader.load(getClass().getResource("LogIn.fxml"));
                    
            Scene scene = new Scene(Gest_root);
            Stage stage= (Stage) ((Node)event.getSource()).getScene().getWindow();
            stage.setScene(scene);
            stage.show();
            
                }
            }
@Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
    }    
    
}    


    
