/** @format */

module.exports = app => {
    const auth = require("../middleware/auth");
    const peoples = require("../controllers/people.controller");

    // Create a new People
    app.post("/peoples", auth, peoples.create);

    // Retrieve all Peoples
    app.get("/peoples", peoples.findAll);

    // Retrieve a single People with peopleId
    app.get("/peoples/:peopleId", peoples.findOne);

    // Update a People with peopleId
    app.put("/peoples/:peopleId", peoples.update);

    // Delete a People with peopleId
    app.delete("/peoples/:peopleId", peoples.delete);

    // Delete all Peoples
    app.delete("/peoples", peoples.deleteAll);

}





