const { Router } = require('express');
// const proj = require('../controller/projectcontroller');
const app = Router();
const Register = require("../models/registers")

const OrdersController = require('../controller/projectcontroller')

app.get('/projects', OrdersController.find_all );

app.get('/projects/:id', OrdersController.find_one );

app.post('/projects/:id', OrdersController.update_one);

app.get('/project/new', OrdersController.new_page);

app.post("/projects", OrdersController.create_entry);

module.exports = app;