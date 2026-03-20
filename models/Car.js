const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  name: String,
  model: String,
  owner: String,
  isAvailable: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Car', carSchema);