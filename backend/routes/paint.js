const express = require('express');
const {
  getPaints,
  updatePaint,
  createPaint,
} = require('../controllers/paintController');

const router = express.Router();

router.get('/', getPaints);

router.patch('/:id', updatePaint);

router.post('/', createPaint);

module.exports = router;
