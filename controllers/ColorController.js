const ColorModel = require('../models/ColorModel');

module.exports.getColors = async (req, res) => {
  try {
    const color = await ColorModel.find();
    res.send(color);
  } catch(err) {
    return res.status(500).json({
      message: 'Не удалось получить colors'
    })
  }
}

module.exports.createColor = async (req, res) => {
  try {
    const { hex, name } = req.body;

    ColorModel
      .create({ hex, name })
      .then((data) => {
        console.log('Добавлен color')
        console.log(data)
        res.send(data);
      })
  } catch(err) {
    console.log(err);
    return res.status(500).json({
      message: 'Не удалось создать color'
    })
  }
}