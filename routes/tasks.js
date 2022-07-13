const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("got all tasks.");
});
router.post("/", (req, res) => {
  res.send("made a new task.");
});
router.get("/:id", (req, res) => {
  res.send("got a particular task.");
});
router.patch("/:id", (req, res) => {
  res.send("updated a particular task.");
});
router.delete("/:id", (req, res) => {
  res.send("deleted a particular task.");
});

module.exports = router;
