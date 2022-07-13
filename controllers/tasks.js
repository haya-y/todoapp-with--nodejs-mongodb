const getAllTasks = (req, res) => {
  res.send("got all tasks.");
};

const createTask = (req, res) => {
  res.send("created a new task.");
};

const getSingleTask = (req, res) => {
  res.send("got a particular task.");
};

const updateTask = (req, res) => {
  res.send("updated a particular task.");
};

const deleteTask = (req, res) => {
  res.send("deleted a particular task.");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
