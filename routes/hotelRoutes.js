const express = require('express');
const router = express.Router();

// Example in‑memory storage – replace with your actual database logic
let hotels = [
  { id: 1, name: 'Grand Hotel', location: 'City Center', rating: 4.5 },
  { id: 2, name: 'Beach Resort', location: 'Coastline', rating: 4.8 }
];

// GET all hotels
router.get('/', (req, res) => {
  res.json(hotels);
});

// GET a single hotel by id
router.get('/:id', (req, res) => {
  const hotel = hotels.find(h => h.id === parseInt(req.params.id));
  if (!hotel) {
    return res.status(404).json({ message: 'Hotel not found' });
  }
  res.json(hotel);
});

// POST create a new hotel
router.post('/', (req, res) => {
  const newHotel = {
    id: hotels.length + 1,
    name: req.body.name,
    location: req.body.location,
    rating: req.body.rating
  };
  hotels.push(newHotel);
  res.status(201).json(newHotel);
});

// PUT update a hotel
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = hotels.findIndex(h => h.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Hotel not found' });
  }
  hotels[index] = { ...hotels[index], ...req.body, id };
  res.json(hotels[index]);
});

// DELETE a hotel
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = hotels.findIndex(h => h.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Hotel not found' });
  }
  hotels.splice(index, 1);
  res.status(204).send();
});

module.exports = router;   // <-- CRITICAL: export the router