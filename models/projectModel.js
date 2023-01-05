const mongoose = require("mongoose");

const projects = new mongoose.Schema({
    idea : {
        type:String,
        required: true
    },
    name : {
        type:String,
        required: true
    },
    market : {
        type:String,
        required: true
    },
    continent : {
        type:String,
        required:true
    },
    country: {
        type:String,
        required: true
    }
});

const Project = new mongoose.model("Project", projects);

module.exports = Project;