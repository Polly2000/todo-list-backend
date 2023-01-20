const { Router } = require('express');
const { registration, login } = require('./controllers/AuthController');
const { getColors, createColor } = require('./controllers/ColorController');
const { getTasks, createTask } = require('./controllers/TaskController');
const { getLists, getList, createList } = require('./controllers/ListController');

const router = Router();

// auth
router.post('/registration', registration);
router.post('/login', login);

// colors
router.get('/colors', getColors);
router.post('/createcolor', createColor)

// lists
router.get('/lists', getLists);
router.get('/lists/:id', getList);
router.post('/createlist', createList);

// tasks
router.get('/tasks', getTasks);
router.post('/createtask', createTask);

module.exports = router;

