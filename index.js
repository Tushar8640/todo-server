const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./db/db");

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//import routes
const todoRoutes = require("./routes/todo.routes.js");

// api routes
app.use("/api/v1/todo", todoRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ------${port}------`);
});

db();
