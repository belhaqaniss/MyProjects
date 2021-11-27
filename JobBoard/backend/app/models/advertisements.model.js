/** @format */

const sql = require("./db.js");

//constructor
const Advertisement = function (advertisement) {
  this.title = advertisement.title;
  this.resume = advertisement.resume;
  this.description = advertisement.description;
  this.parution = advertisement.parution;
  this.published = advertisement.published;
  this.companie_id = advertisement.companie_id;
  this.contrat_type = advertisement.contrat_type;
  this.salaire = advertisement.salaire;
  this.lieu = advertisement.lieu;
  this.temps_de_travail = advertisement.temps_de_travail;
};

Advertisement.create = (newAdvertisement, result) => {
  sql.query("INSERT INTO advertisements SET ?", newAdvertisement, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created advertisement: ", { id: res.insertId, ...newAdvertisement });
    result(null, { id: res.insertId, ...newAdvertisement });
  });
};

Advertisement.findById = (advertisementId, result) => {
  sql.query(`SELECT * FROM advertisements WHERE id = ${advertisementId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found advertisement: ", res[0]);
      result(null, res[0]);
      return;
    }
  });
};

Advertisement.getAll = (result) => {
  sql.query(
    "SELECT * from advertisements",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("advertisement: ", res);
      result(null, res);
    }
  );
};

Advertisement.updateById = (id, advertisement, result) => {
  sql.query(
    "UPDATE advertisements SET title = ?, resume = ?, description = ?, parution = ?, published = ?, companie_id = ?, contrat_type = ?, salaire = ?, lieu = ?, temps_de_travail = ? WHERE id = ?",
    [
      advertisement.title,
      advertisement.resume,
      advertisement.description,
      advertisement.parution,
      advertisement.published,
      advertisement.companie_id,
      advertisement.contrat_type,
      advertisement.salaire,
      advertisement.lieu,
      advertisement.temps_de_travail,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not foun advertisement with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated advertisement: ", { id: id, ...advertisement });
      result(null, { id: id, ...advertisement });
    }
  );
};

Advertisement.remove = (id, result) => {
  sql.query("DELETE FROM advertisements WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
  });
};

Advertisement.removeAll = (result) => {
  sql.query("DELETE FROM advertisements", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} advertisement`);
    result(null, res);
  });
};

module.exports = Advertisement;