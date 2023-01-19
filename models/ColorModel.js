const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  hex: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Color', colorSchema);