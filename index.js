const express = require("express");
const mysql = require("mysql");
const myConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "loginsystem",
});
//test the connection
myConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});
//Query Method
myConnection.query(
  "CREATE TABLE IF NOT EXISTS users(  usersid INT NOT NULL AUTO_INCREMENT,  email VARCHAR(255) NOT NULL,fullname VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, phone VARCHAR(20) NOT NULL,PRIMARY KEY (usersid))",
  (sqlerror) => {
    if (sqlerror) {
      console.log(sqlerror);
    } else {
      console.log("Table Created");
    }
  }
);
const app = express();
app.get("/", (req, res) => {
  console.log(req.baseUrl);
  res.send("Hello there! home route/page");
});
app.get("/login", (res, req) => {
  // Recieve data
  //Compare credentials with what is in the database
  //if the password math --- create a session
  res.send("login page");
});
app.get("/Signup", (res, req) => {
  //Recieve data
  //Input Validation
  //Hash the password
  //Save data in the database
  console.log(req.path);
  res.send("Sign up page");
});
app.get("/protectecRouteOne", (req, res) => {
  res.send("Only for logged in users");
});
app.get("/protectecRouteTwo", (req, res) => {
  res.send("Only for logged in users ");
});
app.get("/publicRouteOne", (req, res) => {
  res.send("For any Visitors ");
});
app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});
//start/run
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
//npm run dev ( to let the server continue runing )
//what are seessions and why we need sessiions
// what does it mean to say HTTP stateless
