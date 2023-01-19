const TaskModel = require('../models/TaskModel');

module.exports.getTasks = async (req, res) => {
  try {
    const task = await TaskModel.find();
    res.send(task);
  } catch(err) {
    return res.status(500).json({
      message: 'Не удалось получить таску'
    })
  }
}

module.exports.createTask = async (req, res) => {
  try {
    const { listId, text, completed } = req.body;

    TaskModel
      .create({ listId, text, completed })
      .then((data) => {
        console.log('Добавлена таска')
        console.log(data)
        res.status(201).send(data)
      })
  } catch(err) {
    return res.status(500).json({
      message: 'Не удалось создать таску'
    })
  }
}