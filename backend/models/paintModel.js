const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paintSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Paint', paintSchema);
