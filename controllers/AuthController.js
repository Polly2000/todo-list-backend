import { Router } from 'express';
import User from '../models/User.js';

const router = Router();
router.post('/registration', async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUsed = await User.findOne({ email })
    if (isUsed) {
      return res.status(300).json({
        message: 'Данный email уже занят'
      })
    }

    const newUser = new User({
      email, password
    })

    await newUser.save();

    res.status(201).json({
      message: 'Пользователь создан'
    })
  } catch(err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось зарегестрироваться'
    })
  }
});

export default router;