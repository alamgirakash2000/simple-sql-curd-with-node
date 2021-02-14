import express from "express";
import db from "../connection.js";
const Router = express.Router();

// See all records
Router.get("/", (req, res) => {
  let sql = "SELECT * FROM students";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

// See Single record
Router.get("/:roll", (req, res) => {
  let sql = `SELECT * FROM students WHERE Roll=${req.params.roll}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

// Update a record
Router.get("/update/:roll", (req, res) => {
  let newName = "Mofiz";
  let sql = `UPDATE students SET Name = '${newName}' WHERE Roll=${req.params.roll}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Name updated Successfully");
  });
});

// DELETE a record
Router.get("/delete/:roll", (req, res) => {
  let sql = `DELETE FROM students WHERE Roll=${req.params.roll}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(`${req.params.roll} rolls' record is deleted..`);
  });
});

// Add new records
Router.get("/addstudent1", (req, res) => {
  let student = {
    Name: "Jabdul",
    Gender: "Male",
    Age: 20,
    GPA: "3.50",
    City: "Dhaka",
  };
  let sql = "INSERT INTO students SET ?";
  let query = db.query(sql, student, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Inserted Successfully");
  });
});

export default Router;
