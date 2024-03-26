require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const paintRoutes = require('./routes/paint');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/paint', paintRoutes);

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('PORT', process.env.PORT);
    });
  })
  .catch((e) => {
    console.log(e);
  });
