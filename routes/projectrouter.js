const { Router } = require('express');
const app = Router();

const ProjectController = require('../controller/projectcontroller')

app.get('/projects', ProjectController.find_all );

app.get('/projects/:id', ProjectController.find_one );

app.post('/projects/:id', ProjectController.update_one);

app.get('/project/new', ProjectController.new);

app.post("/projects", ProjectController.create);

module.exports = app;