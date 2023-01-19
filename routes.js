const { Router } = require('express');
const { getTodo, saveTodo } = require('./controllers/TodoController');
const { registration } = require('./controllers/AuthController');
const { getColors, createColor } = require('./controllers/ColorsController');

const router = Router();

router.get('/', getTodo);
router.get('/colors', getColors);
router.post('/createcolor', createColor)
router.post('/save', saveTodo);
router.post('/registration', registration);


module.exports = router;