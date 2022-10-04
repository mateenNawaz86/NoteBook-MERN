// import connection funtion from database.js
const connectToMongo = require("./dataBase");
const express = require("express");
const cors = require("cors");

connectToMongo();

// create server using express
const app = express();
const port = 5000; // localhost port number is: 5000

// CORS use for hit the API from client seide
app.use(cors());

// Midleware used for read/write JSON formate data
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// listen request from given port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
