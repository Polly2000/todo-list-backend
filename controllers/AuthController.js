const UserModel = require('../models/UserModel');

module.exports.registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // из-за этого тут падает, тк findOne больше не поддерживается (посмотреть у арчакова, у него шото похожее)
    // const isUsed = UserModel.find({ email });
    // if (isUsed) {
    //   return res.status(300).json({
    //     message: 'Не удалось зарегестрироваться (данный email уже занят)'
    //   })
    // }

    const user = new UserModel({
      name, email, password
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