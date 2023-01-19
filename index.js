const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json({extended: true}));
app.use(cors());
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err))

app.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`)
})