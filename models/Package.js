const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
  name: String,
  destination: String,
  activities: [String],
  price: Number,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Package', packageSchema);