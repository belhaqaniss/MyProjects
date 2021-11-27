/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fxml;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.ComboBox;
import javafx.scene.control.ToggleGroup;

public class ModifController implements Initializable {

    @FXML
    private ToggleGroup paye;
    @FXML
    private ComboBox<String> t_p;
    @FXML
    private ToggleGroup t_pg;

   
    @Override
    public void initialize(URL url, ResourceBundle rb) {
       t_p.getItems().removeAll(t_p.getItems());
      t_p.getItems().addAll("Mensuel", "Trimestriel", "Annuel"); 
    }    
    
}
