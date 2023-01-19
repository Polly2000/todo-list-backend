const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');

module.exports.registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({
      name, email, hashedPassword
    })

    await user.save();

    res.status(201).json({
      message: 'Регистрация прошла успешно'
    })

  } catch(err) {
    console.log(err);
    return res.status(500).json({
      message: 'Не удалось зарегестрироваться'
    })
  }
}

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email })

    if (!user) {
      return res.status(400).json({
        message: 'Неверно введен email или пароль'
      })
    }

    const isMatch = bcrypt.compare(password, user.hashedPassword)

    if(!isMatch) {
      return res.status(400).json({
        message: 'Неверно введен email или пароль'
      })
    }

    const jwtSecret = 'hsdjfhsalkfhjkhdsgfyuwegfwefjdswkfvhwyuifhuw';
    const token = jwt.sign(
      {userId: user._id},
      jwtSecret,
      {expiresIn: '1h'}
    )

    res.json({
      token, userId: user._id
    })

  } catch(err) {
    console.log(err);
    return res.status(500).json({
      message: 'Не удалось войти'
    })
  }
}