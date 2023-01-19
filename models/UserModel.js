const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true
  },
  todos: [{
    type: mongoose.Types.ObjectId,
    ref: 'Task'
  }]
})

module.exports = mongoose.model('User', userSchema);