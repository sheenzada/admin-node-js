const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: Number,
  comment: String,
  status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Review', reviewSchema);