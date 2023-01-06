const Register = require("../models/registers")

module.exports = (req,res) =>{
    Register.find({}, (err, projects) => {
      console.log(projects);
      res.render('main', {'projects': projects})
    })
 }