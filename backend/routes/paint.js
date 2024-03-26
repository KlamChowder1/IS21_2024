const express = require('express');

const router = express.Router();

// TODO: get all paint
router.get('/', (req, res) => {
  res.json({ mssg: 'Get all paints' });
});

// TODO: get a single paint
router.get('/:id', (req, res) => {
  res.json({ mssg: 'Get a single paint' });
});

// TODO: update a single paint (use PATCH instead of PUT for partial updates)
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'Update a single paint' });
});

module.exports = router;
