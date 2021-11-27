package fxml;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.Event;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.stage.Stage;
import fxml.TableModel;

public class GestionController implements Initializable {
    int n_ab=0;
    ArrayList<String> l_ab = new ArrayList<String>();
    @FXML
    private Button add;
    @FXML
    private Button supp;
    @FXML
    private Button inf;
    @FXML
    private Button modifier;
    @FXML
    private TableColumn<TableModel, String> Nom_pren;
    @FXML
    private TableColumn<TableModel, String> col_prog;
    @FXML
    private TableColumn<TableModel, Boolean> col_paie;
    @FXML
    private TableView<TableModel> tab;
    @FXML
    private TableColumn<TableModel,String> col_name;
    @FXML
    private TableColumn<TableModel, String> col_pren;
    private static Statement st;
    @FXML
    private void handleaddAction(ActionEvent event) throws IOException { 
        n_ab++;
        FXMLLoader fxmlloader=new FXMLLoader();
        fxmlloader.setLocation(getClass().getResource("Formulaire.fxml"));
        Parent Gest_root = fxmlloader.load();
        
        FormulaireController FC=fxmlloader.getController();

        Scene scene = new Scene(Gest_root);
        Stage stage= (Stage) ((Node)event.getSource()).getScene().getWindow();
        stage.setScene(scene);
        stage.show();
    }
    
    
    @FXML
    private void handledelAction(ActionEvent event) throws IOException {
    FXMLLoader fxmlloader=new FXMLLoader();
        fxmlloader.setLocation(getClass().getResource("Info.fxml"));
        Parent Gest_root = fxmlloader.load();
        
        InfoController IC=fxmlloader.getController();
        IC.iniData(l_ab,3);
        Scene scene = new Scene(Gest_root);
        Stage stage= (Stage) ((Node)event.getSource()).getScene().getWindow();
        stage.setScene(scene);
        stage.show();
    }

    @FXML
    private void handleinfoAction(ActionEvent event) throws IOException {
        FXMLLoader fxmlloader=new FXMLLoader();
        fxmlloader.setLocation(getClass().getResource("Info.fxml"));
        Parent Gest_root = fxmlloader.load();
        
        InfoController IC=fxmlloader.getController();
        IC.iniData(l_ab,1);
        Scene scene = new Scene(Gest_root);
        Stage stage= (Stage) ((Node)event.getSource()).getScene().getWindow();
        stage.setScene(scene);
        stage.show();
    
    }
    @FXML
    private void handlemodifierAction(ActionEvent event) throws IOException {
    FXMLLoader fxmlloader=new FXMLLoader();
        fxmlloader.setLocation(getClass().getResource("Info.fxml"));
        Parent Gest_root = fxmlloader.load();
        
        InfoController IC=fxmlloader.getController();
        IC.iniData(l_ab,2);
        Scene scene = new Scene(Gest_root);
        Stage stage= (Stage) ((Node)event.getSource()).getScene().getWindow();
        stage.setScene(scene);
        stage.show();
    }
    
    ObservableList<TableModel> oblist= FXCollections.observableArrayList();
     @Override
    public void initialize(URL url, ResourceBundle rb) {
        try {
            Connection con=DataConnection.getConnection();
            ResultSet rs=con.createStatement().executeQuery(" select * from l_ab");
            while(rs.next()){
               String NP=rs.getString("nom");
               NP+=" ";
               NP+=rs.getString("prenom");
               l_ab.add(NP);
               oblist.add(new TableModel(rs.getString("nom"),rs.getString("prenom"),rs.getBoolean("paye"),rs.getString("t_p")));
            }
        } catch (SQLException ex) {
            Logger.getLogger(GestionController.class.getName()).log(Level.SEVERE, null, ex);
        }
            col_pren.setCellValueFactory(new PropertyValueFactory<>("prenom"));
            col_name.setCellValueFactory(new PropertyValueFactory<>("nom"));
            col_prog.setCellValueFactory(new PropertyValueFactory<>("t_p"));
            col_paie.setCellValueFactory(new PropertyValueFactory<>("paye"));
            tab.setItems(oblist);
    }      
   
 }
