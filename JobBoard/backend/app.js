/* const express = require('express');
const mysql = require("mysql2");

 
 

const app = express();

const sql = require("./app/models/db");

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));





 
app.get('', (req, res) => {
    sql.query('SELECT * FROM admin', (err, rows) => {
        console.log('Hello Toto !');
    });
}); 
 
 

 app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
   res.json({ message: 'Welcome to QuickJob application.' });
   next(); 
});

app.use((req, res, next) => {
    console.log("Reply sent successfully!");
}); 

module.exports = app;  */