const express = require('express');
const router = express.Router();

// Agar aapke paas models hain (User, Hotel, Car, Booking, etc.) to unhe import karo
// const User = require('../models/User');
// const Hotel = require('../models/Hotel');
// const Car = require('../models/Car');
// const Booking = require('../models/Booking');

// Dashboard main statistics
router.get('/stats', async (req, res) => {
  try {
    // Example: MongoDB aggregation (agar models available hon)
    // const totalUsers = await User.countDocuments();
    // const totalHotels = await Hotel.countDocuments();
    // const totalCars = await Car.countDocuments();
    // const totalBookings = await Booking.countDocuments();
    // const recentBookings = await Booking.find().sort({ createdAt: -1 }).limit(5);

    // Temporary sample data – replace with actual DB queries
    const stats = {
      totalUsers: 1250,
      totalHotels: 45,
      totalCars: 32,
      totalBookings: 189,
      recentBookings: [
        { id: 1, user: "John Doe", hotel: "Grand Hotel", date: "2025-03-20", amount: 250 },
        { id: 2, user: "Jane Smith", hotel: "Beach Resort", date: "2025-03-19", amount: 320 },
        { id: 3, user: "Ali Khan", car: "Toyota Camry", date: "2025-03-18", amount: 75 },
      ],
      revenue: 15230,
      occupancyRate: 68.5,
    };
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Dashboard charts data (example)
router.get('/charts', async (req, res) => {
  try {
    // Agar real data ho to yahan fetch karo
    const chartData = {
      bookingsByMonth: [
        { month: "Jan", bookings: 12 },
        { month: "Feb", bookings: 19 },
        { month: "Mar", bookings: 28 },
        { month: "Apr", bookings: 35 },
        { month: "May", bookings: 42 },
        { month: "Jun", bookings: 50 },
      ],
      topHotels: [
        { name: "Grand Hotel", bookings: 45 },
        { name: "Beach Resort", bookings: 38 },
        { name: "City Inn", bookings: 27 },
      ],
    };
    res.json(chartData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Dashboard recent activities
router.get('/activities', async (req, res) => {
  try {
    const activities = [
      { action: "New booking created", user: "John Doe", timestamp: "2025-03-20T10:30:00Z" },
      { action: "Hotel review added", user: "Jane Smith", timestamp: "2025-03-20T09:15:00Z" },
      { action: "Car rental confirmed", user: "Ali Khan", timestamp: "2025-03-19T16:45:00Z" },
      { action: "User registered", user: "Sarah Ahmed", timestamp: "2025-03-19T12:20:00Z" },
    ];
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;   // <-- zaroori hai