
const Admin = require('../models/admin.model');

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can't be empty !",
    });
  }

  // Create a Admin
  const Admin = new Admin({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  // Save Admin in the db
  Admin.create(admin, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Admin.",
      });
    } else {
      res.send(data);
    }
  });
};

exports.findAll = (req, res) => {
    Admin.getAll((err, data) => {
        if (err) {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving the Admin.",
          });
        } else {
          res.send(data);
        }
    });
};

exports.findOne = (req, res) => {
  Admin.findById(req.params.adminId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: ` Error retrieving Admin with id" ${req.params.adminId}.`,
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

  Admin.updateById(req.params.adminId, new Admin(req.bbody), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Admin with id ${req.params.adminId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating Admin with id ${req.params.adminId}.`,
        });
      }
    } else {
      res.send(data);
    }
  });
};

exports.delete = (req, res) => {
  Admin.remove(req.params.adminId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Admin with id ${req.params.adminId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating Admin with id ${req.params.adminId}.`,
        });
      }
    } else {
      res.send({ message: `Admin was deleted successfully !` });
    }
  });
};

exports.deleteAll = (req, res) => {
  Admin.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while removing all Admins",
      });
    } else {
      res.send({ message: ` All Admins were deleted successfully !` });
    }
  });
};