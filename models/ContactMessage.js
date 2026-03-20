const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
  status: { type: String, enum: ['uncalled', 'annulled', 'contacted'], default: 'uncalled' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ContactMessage', contactSchema);