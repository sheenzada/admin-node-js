// const express = require('express');
// const {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// } = require('../controllers/userController');
// const { protect, admin } = require('../middleware/authMiddleware');
// const router = express.Router();

// router.route('/')
//   .get(protect, admin, getUsers)
//   .post(protect, admin, createUser);

// router.route('/:id')
//   .get(protect, admin, getUserById)
//   .put(protect, admin, updateUser)
//   .delete(protect, admin, deleteUser);

// module.exports = router;





// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // if using bcrypt

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
}, {
  timestamps: true,
});

// Password hashing (example)
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;