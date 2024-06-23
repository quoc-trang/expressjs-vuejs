const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

const indexRoutes = require("./routes/index.routes");
const todoRoutes = require("./routes/todo.routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/todos", todoRoutes);

app.use("/", indexRoutes);

try {
  connectToDatabase();
  console.log("Connected to database");
} catch (error) {
  console.log("Error connecting to database: ", error);
}

async function connectToDatabase() {
  const url = process.env.DB_CONNECT;
  await mongoose.connect(url);
}

const port = process.env.PORT || 1309;
app.listen(port, function () {
  console.log(`Server is running on port: ${port}`);
});
