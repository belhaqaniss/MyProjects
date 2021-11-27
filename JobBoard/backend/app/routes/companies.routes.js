module.exports = app => {
    const auth = require("../middleware/auth");
    const companies = require("../controllers/companies.controller");


    app.post("/companies", companies.create);

    app.get("/companies", companies.findAll);

    app.get("/companies/:companyId", companies.findOne);

    app.put("/companies/:companyId", companies.update);

    app.delete("/companies/:companyId", companies.delete);

    app.delete("/companies", companies.deleteAll);

}