const Project = require("../models/project")

module.exports = (req, res) => {
  Project.find({}, (err, projects) => {
    console.log(projects);
    res.render('main', { 'projects': projects })
  })
}