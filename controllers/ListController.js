const ListModel = require('../models/ListModel');

module.exports.getLists = async (req, res) => {
  try {
    const list = await ListModel.find();
    res.send(list);
  } catch(err) {
    console.log(err)
    return res.status(500).json({
      message: 'Не удалось получить список'
    })
  }
}

module.exports.createList = async (req, res) => {
  try {
    const { name, colorId } = req.body;

    ListModel
      .create({ name, colorId })
      .then((data) => {
        console.log('Добавлен список')
        console.log(data)
        res.status(201).send(data)
      })
  } catch(err) {
    console.log(err);
    return res.status(500).json({
      message: 'Не удалось создать список'
    })
  }
}