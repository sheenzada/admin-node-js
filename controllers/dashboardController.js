const User = require('../models/User');
const Booking = require('../models/Booking');
const Hotel = require('../models/Hotel');
const Car = require('../models/Car');
const Package = require('../models/Package');
const Review = require('../models/Review');
const ContactMessage = require('../models/ContactMessage');

// @desc    Get dashboard stats
// @route   GET /api/dashboard/stats
// @access  Private/Admin
const getDashboardStats = async (req, res) => {
  try {
    // Total users & active users
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ isActive: true });

    // Total bookings & this month's bookings
    const totalBookings = await Booking.countDocuments();
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const thisMonthBookings = await Booking.countDocuments({ createdAt: { $gte: startOfMonth } });

    // Hotels
    const totalHotels = await Hotel.countDocuments();
    const activeHotels = await Hotel.countDocuments({ isActive: true });
    const newHotels = await Hotel.countDocuments({ createdAt: { $gte: startOfMonth } });

    // Cars
    const totalCars = await Car.countDocuments();
    const availableCars = await Car.countDocuments({ isAvailable: true });

    // Packages
    const totalPackages = await Package.countDocuments();
    const activePackages = await Package.countDocuments({ isActive: true });

    // Reviews pending
    const pendingReviews = await Review.countDocuments({ status: 'pending' });
    const newReviews = await Review.countDocuments({ createdAt: { $gte: startOfMonth } });

    // Revenue (this month) – assuming you have a price field in bookings or packages
    // This is a simplified calculation; adjust according to your schema
    const bookingsThisMonth = await Booking.find({ createdAt: { $gte: startOfMonth } }).populate('itemId');
    let revenue = 0;
    bookingsThisMonth.forEach(b => {
      if (b.itemId && b.itemId.price) revenue += b.itemId.price;
    });

    // Recent bookings (last 5)
    const recentBookings = await Booking.find()
      .populate('user', 'name')
      .sort('-createdAt')
      .limit(5)
      .lean();

    // New hotels list
    const newHotelsList = await Hotel.find().sort('-createdAt').limit(5).lean();

    // Pending customer packages (maybe from a custom package request model)
    // For demo, we'll use a separate collection "CustomPackage" – create if needed
    const PendingCustomPackages = require('../models/CustomPackage'); // create model
    const pendingPackages = await PendingCustomPackages.find({ status: 'pending' })
      .populate('user', 'name')
      .limit(5)
      .lean();

    // New contact messages
    const newMessages = await ContactMessage.find().sort('-createdAt').limit(5).lean();

    res.json({
      totalUsers,
      activeUsers,
      totalBookings,
      thisMonthBookings,
      totalHotels,
      activeHotels,
      totalCars,
      availableCars,
      totalPackages,
      activePackages,
      pendingReviews,
      newReviews,
      newHotels,
      revenue,
      recentBookings,
      newHotelsList,
      pendingPackages,
      newMessages,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDashboardStats };