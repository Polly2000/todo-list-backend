import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 500;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('server ok');
})