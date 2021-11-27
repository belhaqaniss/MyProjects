 /** @format */
/*
require("dotenv").config({ path: "./config/.env" }); 

const mysql = require("mysql2");

const dbConfig = require("../config/.env");

console.log("Connexion à la base de données...");

const connection = mysql.createConnection({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the nodeJS server PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log(
      "connected to database with threadId :  " + connection.threadId
    );
  }
});

module.exports = connection;
 */