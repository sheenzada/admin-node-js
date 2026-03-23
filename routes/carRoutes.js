const express = require('express');
const router = express.Router();

// In‑memory storage – replace with your actual database (e.g., Car model)
let cars = [
  { id: 1, brand: 'Toyota', model: 'Camry', year: 2022, pricePerDay: 50 },
  { id: 2, brand: 'Honda', model: 'Civic', year: 2023, pricePerDay: 45 }
];

// GET all cars
router.get('/', (req, res) => {
  res.json(cars);
});

// GET a single car by id
router.get('/:id', (req, res) => {
  const car = cars.find(c => c.id === parseInt(req.params.id));
  if (!car) {
    return res.status(404).json({ message: 'Car not found' });
  }
  res.json(car);
});

// POST create a new car
router.post('/', (req, res) => {
  const newCar = {
    id: cars.length + 1,
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    pricePerDay: req.body.pricePerDay
  };
  cars.push(newCar);
  res.status(201).json(newCar);
});

// PUT update a car
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cars.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Car not found' });
  }
  cars[index] = { ...cars[index], ...req.body, id };
  res.json(cars[index]);
});

// DELETE a car
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cars.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Car not found' });
  }
  cars.splice(index, 1);
  res.status(204).send();
});

module.exports = router;   // <-- CRITICAL: export the router