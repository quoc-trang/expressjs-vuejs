const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello from index route!");
});

module.exports = router;
