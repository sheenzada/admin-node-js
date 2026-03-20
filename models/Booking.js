const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['hotel', 'car', 'package'], required: true },
  itemId: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: 'type' }, // dynamic ref
  itemName: String, // denormalized for quick display
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['Confirmed', 'Pending', 'Cancelled'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

// Example: if type='hotel', itemId refers to Hotel model
module.exports = mongoose.model('Booking', bookingSchema);