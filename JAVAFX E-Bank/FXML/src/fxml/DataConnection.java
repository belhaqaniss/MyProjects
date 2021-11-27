
package fxml;

import java.beans.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.swing.JOptionPane;

public class DataConnection {

 Connection con;
 Statement st;
  public static Connection getConnection() {
 try{
            Connection conn=DriverManager.getConnection("jdbc:sqlite:Liste_abo.db");
            System.out.print("Connected");
            return conn;
        }catch(SQLException ex){
          JOptionPane.showMessageDialog(null,ex);
          return null;
        }
  }
  }