import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "college",
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected");
  }
});

export default db;
