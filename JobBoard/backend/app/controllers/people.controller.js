const  People = require("../models/people.model");


// Create and Save a new People
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty !"
        });
    }

    // Create a People
    const people = new People({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        address: req.body.address,
        phone_code: req.body.phone_code,
        city: req.body.phone_code,
        birth_date: req.body.birth_date,
        website: req.body.website,
        picture: req.body.picture,
        gender: req.body.gender,
    });

    // Save People in the db
    People.create(people, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the People."
            });
        } else {
            res.send(data);
        }

    });
};


// Retrieve all People from the db
exports.findAll = (req, res) => {
    People.getAll((err, data) => {
        if (err) {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving the People.",
          });
        } else {
          res.send(data);
        }
    });
};


// Find a single People with a peopleId
exports.findOne = (req, res) => {
    People.findById(req.params.peopleId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: ` Error retrieving People with id" ${ req.params.peopleId }.`
                });
            }
        } else {
            res.send(data);
        }
    });
};


// Update a People identified by the peopleId in the request
exports.update = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty !"
        });
    }

    People.updateById(req.params.peopleId, new People(req.bbody), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found People with id ${ req.params.peopleId }.`
            });
        } else {
            res.status(500).send({
                message: `Error updating People with id ${ req.params.peopleId }.`
            });
        }
    } else {
        res.send(data);
    }
    });
};


// Delete a people identified bbby the peopleId in the request
exports.delete = (req, res) => {
    People.remove(req.params.peopleId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found People with id ${req.params.peopleId}.`,
              });
            } else {
              res.status(500).send({
                message: `Error updating People with id ${req.params.peopleId}.`,
              });
            }
        } else {
            res.send({ message: `People was deleted successfully !`});
        }
    });
};


// Delete all Peoples from the db
exports.deleteAll = (req, res) => {
    People.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: 
                    err.message || "Some error occured while removing all Peoples"
            });
        } else {
            res.send({ message: ` All Peoples were deleted successfully !` });
        }
    });

};
