const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/v1/tasks", (req, res) => {
  res.send("got all tasks.");
});
app.post("/api/v1/tasks", (req, res) => {
  res.send("made a new task.");
});
app.get("/api/v1/tasks/:id", (req, res) => {
  res.send("got a particular task.");
});
app.patch("/api/v1/tasks/:id", (req, res) => {
  res.send("updated a particular task.");
});
app.delete("/api/v1/tasks/:id", (req, res) => {
  res.send("deleted a particular task.");
});


app.listen(PORT, console.log("server is set up."));
