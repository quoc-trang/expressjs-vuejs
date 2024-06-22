const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const indexRoutes = require("./routes/index.routes");

const app = express();

const port = process.env.PORT || 1309;

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

app.listen(port, function () {
  console.log(`Server is running on port: ${port}`);
});
