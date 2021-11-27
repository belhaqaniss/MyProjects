const Advertisement = require('../models/advertisements.model');

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can't be empty !",
    });
  }
  
  const advertisement = new Advertisement({
    title: req.body.title,
    resume: req.body.resume,
    description: req.body.description,
    parution: req.body.parution,
    published: req.body.published,
    companie_id: req.body.companie_id,
    contrat_type: req.body.contrat_type,
    salaire: req.body.salaire,
    lieu: req.body.lieu,
    temps_de_travail: req.body.temps_de_travail,
  });

  // Save advertisement in the db
  Advertisement.create(advertisement, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the advertisement.",
      });
    } else {
      res.send(data);
    }
  });
};

exports.findAll = (req, res) => {
  Advertisement.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Advertisement.",
      });
    } else {
      res.send(data);
    }
  });
};

exports.findOne = (req, res) => {
  Advertisement.findById(req.params.advertisementId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: ` Error retrieving Advertisement with id" ${req.params.advertisementId}.`,
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
      message: "Content can't be empty !",
    });
  }

  Advertisement.updateById(req.params.advertisementId, new Advertisement(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Advertisement with id ${req.params.advertisementId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating Advertisement with id ${req.params.advertisementId}.`,
        });
      }
    } else {
      res.send(data);
    }
  });
};

exports.delete = (req, res) => {
  Advertisement.remove(req.params.advertisementId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Advertisement with id ${req.params.advertisementId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating Advertisement with id ${req.params.advertisementId}.`,
        });
      }
    } else {
      res.send({ message: `Advertisement was deleted successfully !` });
    }
  });
};

exports.deleteAll = (req, res) => {
  Advertisement.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while removing all Advertisements",
      });
    } else {
      res.send({ message: ` All Advertisements were deleted successfully !` });
    }
  });
};