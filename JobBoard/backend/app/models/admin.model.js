
 const sql = require('./db');

const Admin = function(admin) {
    this.firstname = admin.firstname;
    this.lastname = admin.lastname;
    this.email = admin.email;
    this.password = admin.password;
    this.role = admin.role;

};

Admin.create = (newAdmin, result) => {
  sql.query("INSERT INTO admin SET ?", newAdmin, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created admin: ", { id: res.insertId, ...newAdmin });
    result(null, { id: res.insertId, ...newAdmin });
  });
};

Admin.findById = (adminId, result) => {
  sql.query(`SELECT * FROM admin WHERE id = ${adminId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found admin: ", res[0]);
      result(null, res[0]);
      return;
    }
  });
};

Admin.getAll = (result) => {
  sql.query("SELECT * FROM admin", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("admin: ", res);
    result(null, res);
  });
};

Admin.updateById = (id, admin, result) => {
  sql.query(
    "UPDATE admin SET firstname = ?, lastname = ?, email = ?, password = ?, role = ?,  WHERE id = ?",
    [
      admin.firstname,
      admin.lastname,
      admin.email,
      admin.password,
      admin.role,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not foun admin with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated admin: ", { id: id, ...admin });
      result(null, { id: id, ...admin });
    }
  );
};

Admin.remove = (id, result) => {
  sql.query("DELETE FROM admin WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      //not found Admin with the id
      result({ kind: "not_found" }, null);
      return;
    }
  });
};

Admin.removeAll = (result) => {
  sql.query("DELETE FROM admin", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} admin`);
    result(null, res);
  });
};

module.exports = Admin;