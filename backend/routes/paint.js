const express = require('express');
const Paint = require('../models/paintModel');

const router = express.Router();

// TODO: could add controllers for paint routes but keeping it simple for now

router.get('/', async (req, res) => {
  const paints = await Paint.find({}).sort({ createdAt: -1 });
  res.status(200).json(paints);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const paint = await Paint.findById(id);
  if (!paint) {
    return res.status(404).json({
      error: 'This paint does not exist',
    });
  }
  res.status(200).json(paint);
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
