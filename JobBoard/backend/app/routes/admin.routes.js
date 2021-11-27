/** @format */

module.exports = (app) => {
  const auth = require("../middleware/auth");
  const admin = require("../controllers/admin.controller");

  
  app.post("/admin", admin.create);

 
  app.get("/admin", admin.findAll);

  
  app.get("/admin/:adminId", admin.findOne);

 
  app.put("/admin/:adminId", admin.update);

  
  app.delete("/admin/:adminId", admin.delete);

  
  app.delete("/admin", admin.deleteAll);
};
