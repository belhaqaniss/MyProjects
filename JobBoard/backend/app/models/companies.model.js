
const sql = require('./db');


const Company = function(company) {
    this.name = company.name;
    this.activies = company.activies;
    this.address = company.address;
    this.postal_code = company.postal_code;
    this.city = company.city;
    this.siret = company.siret;
    this.password = company.password;
    this.number_employes = company.number_employes;
    this.website = company.website;
    this.phone = company.phone;
    this.email = company.email;
    this.contact_name = company.contact_name;
};

Company.create = (newCompany, result) => {
  sql.query("INSERT INTO companies SET ?", newCompany, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created company: ", { id: res.insertId, ...newCompany });
    result(null, { id: res.insertId, ...newCompany });
  });
};

Company.findById = (companyId, result) => {
  sql.query(`SELECT * FROM companies WHERE id = ${companyId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found company: ", res[0]);
      result(null, res[0]);
      return;
    }
  });
};

Company.getAll = (result) => {
  sql.query("SELECT * FROM companies", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("company: ", res);
    result(null, res);
  });
};

Company.updateById = (id, company, result) => {
  sql.query(
    "UPDATE companies SET name = ?, activies = ?, address = ?, postal_code = ?, city = ?,  siret = ?, password = ?, number_employes = ?, website = ?, phone = ?, email = ?, contact_name = ? WHERE id = ?",
    [
      
      company.name,
      company.activies,
      company.address,
      company.postal_code,
      company.city,
      company.siret,
      company.password,
      company.number_employes,
      company.website,
      company.phone,
      company.email,
      company.contact_name,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not foun Company with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated company: ", { id: id, ...company });
      result(null, { id: id, ...company });
    }
  );
};

Company.remove = (id, result) => {
  sql.query("DELETE FROM companies WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      //not found Company with the id
      result({ kind: "not_found" }, null);
      return;
    }
  });
};

Company.removeAll = (result) => {
  sql.query("DELETE FROM companies", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} company`);
    result(null, res);
  });
};

module.exports = Company;
