const mongoose = require('mongoose');

const customPackageSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    destination: String,
    activities: String,
    estimatedPrice: Number,
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CustomPackage', customPackageSchema);