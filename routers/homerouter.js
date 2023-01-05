const { Router } = require('express');
const home = require('../controllers/homecontroller')

const app = Router();
app.get('/', home);
module.exports = app;