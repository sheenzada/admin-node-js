const express = require('express');
const {
  getBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} = require('../controllers/bookingController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .get(protect, admin, getBookings)
  .post(protect, admin, createBooking);

router.route('/:id')
  .get(protect, admin, getBookingById)
  .put(protect, admin, updateBooking)
  .delete(protect, admin, deleteBooking);

module.exports = router;