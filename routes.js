const { Router } = require('express');
const { registration } = require('./controllers/AuthController');
const { getColors, createColor } = require('./controllers/ColorController');
const { getTasks, createTask } = require('./controllers/TaskController');
const { getLists, createList } = require('./controllers/ListController');

const router = Router();

// auth
router.post('/registration', registration);

// colors
router.get('/colors', getColors);
router.post('/createcolor', createColor)

// lists
router.get('/lists', getLists);
router.post('/createlist', createList);

// tasks
router.get('/tasks', getTasks);
router.post('/createtask', createTask);

module.exports = router;

