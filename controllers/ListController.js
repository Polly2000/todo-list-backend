const ListModel = require('../models/ListModel');

module.exports.getLists = async (req, res) => {
  try {
    const list = await ListModel.find();
    res.send(list);
  } catch(err) {
    console.log(err)
    return res.status(500).json({
      message: 'Не удалось получить списки'
    })
  }
}

module.exports.getList = async (req, res) => {
  try {
    const listId = req.params.id;
    // console.log(listId);
    const list = await ListModel.findOne({ _id: listId });
    res.json(list);
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