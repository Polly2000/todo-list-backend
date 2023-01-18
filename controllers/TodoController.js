const TodoModel = require('../models/TodoModel');

module.exports.getTodo = async (req, res) => {
  try {
    const todo = await TodoModel.find();
    res.send(todo);
  } catch(err) {
    return res.status(500).json({
      message: 'Не удалось получить задачу'
    })
  }
}

module.exports.saveTodo = async (req, res) => {
  try {
    const { text } = req.body;

    TodoModel
      .create({ text })
      .then((data) => {
        console.log('Добавлено туду')
        console.log(data)
        res.send(data)
      })
  } catch(err) {
    return res.status(500).json({
      message: 'Не удалось создать задачу'
    })
  }
}