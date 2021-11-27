

module.exports = (app) => {
  const auth = require("../middleware/auth");
  const advertisements = require("../controllers/advertisements.controller");

  
  app.post("/advertisements", advertisements.create);

  
  app.get("/advertisements", advertisements.findAll);

  
  app.get("/advertisements/:advertisementId", advertisements.findOne);

  
  app.put("/advertisements/:advertisementId", advertisements.update);

  
  app.delete("/advertisements/:advertisementId", advertisements.delete);

  
  app.delete("/advertisements", advertisements.deleteAll);
};
