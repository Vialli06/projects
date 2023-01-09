const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
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
},
{ timestamps: true });

const Project = new mongoose.model("Project", projectSchema);

module.exports = Project;