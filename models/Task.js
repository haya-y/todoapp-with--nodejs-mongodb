const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Fill in a task name."],
    trim: true,
    maxlength: [20, "Maximum 20 letters."],
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

module.exports = mongoose.model("Task", TaskSchema)
