package ubankkk;

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
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.stage.Stage;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.sql.*;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.stage.Stage;
import javax.swing.JOptionPane;
import javafx.scene.control.Label;
/**
 *
 * @author dell
 */
public class FXMLDocumentController implements Initializable { 
    public LoginModel loginModel = new LoginModel();

   @FXML
   private Label isConnected;
   @FXML
   private TextField txtUsername;
   @FXML
   private TextField txtPassword;
   
  
    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
        if(loginModel.isDbConnected()){
        isConnected.setText("Connected");
        }else{
            isConnected.setText("Not Connected");
        }
    }    
@FXML
   private void Login(ActionEvent event) throws IOException {
       Parent fxmlDocument = null;
   try{
   if(loginModel.isLogin(txtUsername.getText(),txtPassword.getText())){
                isConnected.setText("Correct");
                fxmlDocument=FXMLLoader.load(getClass().getResource("NextPage.fxml"));
                Scene fxmlDocument2Scene= new Scene(fxmlDocument);
                Stage window=(Stage)((Node)event.getSource()).getScene().getWindow();
                window.setScene(fxmlDocument2Scene);
                window.show();
   }else{ 
       isConnected.setText("username and password is not correct");
   }
   
   } catch (SQLException e){
   isConnected.setText("username and password is not correct");
   // TODO Auto-generated catch block
   e.printStackTrace();
   }
   }
}