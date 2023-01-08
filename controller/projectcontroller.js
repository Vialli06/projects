const Project = require("../models/project")
var mongoose = require("mongoose")

exports.find_all = (req,res) =>{
    Project.find({}, (err, projects) => {
        console.log(projects);
       res.render('projects/list', {'projects': projects});
    })
}

exports.find_one = (req,res) =>{
    console.log(req.params);
    var id = req.params.id;
    console.log(id);
    Project.findOne({ _id: id }, (err, project) => {
        console.log("*******");
        // console.log(project.id);
        console.log(project);
        res.render('projects/view',{'project': project });
    })
 }

 exports.update_one = (req,res) =>{
    var id = req.params.id;
    var body = req.body;

    var data = {
        idea: body.idea,
        name : body.name,
        market: body.market,
        continent : body.continent,
        country : body.country
    }

    Project.updateOne({ _id: id }, data,(err,project)=>{
        if(err){
            throw err;
        }
        console.log("Record Updated Successfully");
    });

    res.redirect('/projects');
 }

 exports.new = (req,res) =>{
    res.render('projects/new');
}

exports.create = (req,res)=>{
    console.log("heer********************** ");
    // console.log(req);
    console.log(req.body);
    console.log("heer2********************** ");
    var idea = req.body.idea;
    var name = req.body.name;
    var market = req.body.market;
    var continent = req.body.continent;
    var country = req.body.country;

    var data = {
        idea: idea,
        name : name,
        market: market,
        continent : continent,
        country : country
    }

    Project.create(data,(err,project)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('/projects');

}