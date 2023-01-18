const { Router } = require('express');
const { getTodo, saveTodo } = require('./controllers/TodoController');
const { registration } = require('./controllers/AuthController');

const router = Router();

router.get('/', getTodo);
router.post('/save', saveTodo);
router.post('/registration', registration);


module.exports = router;