require('dotenv').config();

const express = require('express');
const paintRoutes = require('./routes/paint');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/paint', paintRoutes);

app.listen(process.env.PORT, () => {
  console.log('PORT', process.env.PORT);
});
