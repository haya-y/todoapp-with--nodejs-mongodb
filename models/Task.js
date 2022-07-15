const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Fill in a task name."],
    trim: true,
    maxlength: [20, "Write a task name in maximum 20 letters."],
  },
  completed: {
    type: String,
    default: false,
  }
})

module.exports = mongoose.model("Task", TaskSchema)
