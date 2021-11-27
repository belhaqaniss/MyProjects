
package ubankkk;

import java.sql.*;

public class SqliteConnection {
    public static Connection Connector(){
    try{
    Class.forName("org.sqlite.JDBC");
    Connection conn =DriverManager.getConnection("jdbc:sqlite:clientsDB.db");
    return conn;
    }catch(ClassNotFoundException | SQLException e){
     return null;
     
    // TODO: handle exception
    }
    }
    
}
