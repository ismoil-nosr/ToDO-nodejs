const express = require('express');
const tasksRouter = express.Router();

const tasksController = require(__dirname + '/../controllers/tasksController.js');

tasksRouter.get('/', tasksController.index);
tasksRouter.post('/', tasksController.store);
tasksRouter.delete('/:task_id', tasksController.destroy);

module.exports = tasksRouter;