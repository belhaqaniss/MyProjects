
const Company = require('../models/companies.model');

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can't be empty !",
    });
  }
   
  const company = new Company({
    name: req.body.name,
    activies: req.body.activies,
    address: req.body.address,
    postal_code: req.body.postal_code,
    city: req.body.city,
    siret: req.body.siret,
    password: req.body.password,
    number_employes: req.body.number_employes,
    website: req.body.website,
    phone: req.body.phone,
    email: req.body.email,
    contact_name: req.body.contact_name,
  });

  
    Company.create(company, (err, data) => {
        if (err) {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Company.",
        });
        } else {
        res.send(data);
        }
    });
};

exports.findAll = (req, res) => {
    Company.getAll((err, data) => {
        if (err) {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving the Company.",
          });
        } else {
          res.send(data);
        }
    });
};

exports.findOne = (req, res) => {
    Company.findById(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: ` Error retrieving Company with id" ${ req.params.companyId }.`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.update = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty !"
        });
    }

    Company.updateById(req.params.companyId, new Company(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Company with id ${ req.params.companyId }.`
            });
        } else {
            res.status(500).send({
                message: `Error updating Company with id ${ req.params.companyId }.`
            });
        }
    } else {
        res.send(data);
    }
    });
};

exports.delete = (req, res) => {
    Company.remove(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Company with id ${req.params.companyId}.`,
              });
            } else {
              res.status(500).send({
                message: `Error updating Company with id ${req.params.companyId}.`,
              });
            }
        } else {
            res.send({ message: `Company was deleted successfully !`});
        }
    });
};

exports.deleteAll = (req, res) => {
    Company.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: 
                    err.message || "Some error occured while removing all Companies"
            });
        } else {
            res.send({ message: ` All Companies were deleted successfully !` });
        }
    });

};