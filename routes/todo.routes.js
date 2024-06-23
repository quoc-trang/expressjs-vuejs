const express = require("express");
const router = express.Router();

const Todo = require("../models/todo.model");

router.get("/", async function (req, res) {
  const todos = await Todo.find({});

  res.send(todos);
});

router.post("/:id", async function (req, res) {
  const { title, completed, id } = req.body;
  const todo = new Todo({
    title,
    completed,
    id,
  });

  try {
    await todo.save();
    res.send("save successfully");
  } catch (error) {
    res.sendStatus(500);
  }
});

router.patch("/:id", async function (req, res) {
  const { title, completed } = req.body;

  const response = await Todo.findOneAndUpdate(
    { id: req.params.id },
    { title, completed }
  );
  if (response) {
    res.send("update successfully");
  } else {
    res.send("update failed");
  }
});

router.delete("/:id", async function (req, res) {
  const response = await Todo.findOneAndDelete({ id: req.params.id });
  if (response) {
    res.send("delete successfully");
  } else {
    res.send("delete failed");
  }
});

module.exports = router;
