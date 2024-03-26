const express = require('express');
const Paint = require('../models/paintModel');

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

// need a POST to insert stuff into db
router.post('/', async (req, res) => {
  const { title, quantity } = req.body;
  try {
    const paint = await Paint.create({ title, quantity });
    console.log(paint);
    res.status(200).json(paint);
  } catch (e) {
    res.status(400).json({ error: e.message });
    console(e);
  }
});

module.exports = router;
