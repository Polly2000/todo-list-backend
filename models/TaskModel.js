const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  listId: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Task', taskSchema);