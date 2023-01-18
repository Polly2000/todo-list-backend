import express from 'express';
import mongoose from 'mongoose';
// import cors from 'cors';
import router from './controllers/AuthController.js';

const app = express();
// const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.use(express.json({extended: true}));
// app.use(cors({
//   origin: "http://localhost:3000"
// }));
app.use('api/auth', router);

mongoose
  .connect('')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err))

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('server ok');
})
