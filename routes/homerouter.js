const { Router } = require('express');
const home = require('../controller/homecontroller');
const app = Router();
const Register = require("../models/registers")
  
app.get('/',home);
  
module.exports = app;