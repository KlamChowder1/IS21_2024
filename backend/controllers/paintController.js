const Paint = require('../models/paintModel');

const getPaints = async (req, res) => {
  const paints = await Paint.find({}).sort({ createdAt: -1 });
  res.status(200).json(paints);
};

const updatePaint = async (req, res) => {
  const { id } = req.params;
  try {
    const paint = await Paint.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!paint) {
      return res.status(404).json({ error: 'This paint does not exist' });
    }
    return res.status(200).json(paint);
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

const createPaint = async (req, res) => {
  const { title, quantity } = req.body;
  try {
    const paint = await Paint.create({ title, quantity });
    return res.status(200).json(paint);
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

module.exports = {
  getPaints,
  updatePaint,
  createPaint,
};
