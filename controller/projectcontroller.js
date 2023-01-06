const Register = require("../models/registers")
var mongoose = require("mongoose")

exports.find_all = (req,res) =>{
    Register.find({}, (err, projects) => {
        console.log(projects);
       res.render('projects', {'projects': projects});
    })
}

exports.find_one = (req,res) =>{
    console.log(req.params);
    var id = req.params.id;
    console.log(id);
    Register.findOne({ _id: id }, (err, project) => {
        console.log("*******");
        // console.log(project.id);
        console.log(project);
        res.render('view_project',{'project': project });
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

    Register.updateOne({ _id: id }, data,(err,project)=>{
        if(err){
            throw err;
        }
        console.log("Record Updated Successfully");
    });

    res.redirect('/projects');
 }

 exports.new_page=(req,res) =>{
    res.render('new_project');
}

exports.create_entry = (req,res)=>{
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

    Register.create(data,(err,project)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('/projects');

}