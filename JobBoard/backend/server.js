const { json } = require("express");
const express = require("express");
const cors = require("cors");


const app = express();

const corsOptions = {
  origin: "http://localhost:300"
};
const PORT = process.env.PORT || 3001;
const sql = require("./app/models/db");

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to QuickJob application." });
});

/* app.get("/admin", (req, res) => {
  sql.query("SELECT * FROM admin", (err, rows) => {
    res;json({ message: 'Admin est connecté !'});
    console.log("Hello Toto !");
  });
});  */

require("./app/routes/people.routes.js")(app);
require("./app/routes/admin.routes.js")(app);
require("./app/routes/companies.routes.js")(app);
require("./app/routes/advertisements.routes.js")(app);

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


