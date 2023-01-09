const { Router } = require('express');
const home = require('../controller/homecontroller');
const app = Router();

app.get('/', home);

module.exports = app;