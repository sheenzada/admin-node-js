

const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
  name: { type: String, required: true },
  city: String,
  owner: String,
  totalRooms: Number,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Hotel', hotelSchema);