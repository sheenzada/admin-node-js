const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Package routes are not yet implemented' });
});

module.exports = router;