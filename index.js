var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const { Schema } = mongoose;
var path=require('path');
const projectSchema = new Schema({ idea: String,name: String, market:String, continent:String, country:String }, { timestamps: true });
const Project = mongoose.model('Project', projectSchema);

const app = express()

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://127.0.0.1:27017';
// const dbname ='mydb';
// const client = new MongoClient(url);
// var db = mongoose.connection;

// db.on('error',()=>console.log("Error in Connecting to Database"));
// db.once('open',()=>console.log("Connected to Database"));

// client.connect(function(err) {
//     console.log("Connected succesfully to mongodb");
// })

mongoose.connect('mongodb://127.0.0.1:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))


app.get('/', (req,res) =>{
   Project.find({}, (err, projects) => {
     console.log(projects);
     res.render('main', {'projects': projects})
   })
})


app.get('/projects', (req,res) =>{
    Project.find({}, (err, projects) => {
        console.log(projects);
       res.render('projects', {'projects': projects});
    })
});

app.get('/projects/:id', (req,res) =>{
    console.log(req.params);
    var id = req.params.id;
    console.log(id);
    Project.findOne({ _id: id }, (err, project) => {
        console.log("*******");
        // console.log(project.id);
        console.log(project);
        res.render('view_project',{'project': project });
    })
 });

app.post('/projects/:id', (req,res) =>{
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
 });


app.get('/project/new', (req,res) =>{
    res.render('new_project');
});

app.post("/projects",(req,res)=>{
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

})


app.listen(8081);


console.log("Listening on PORT 8081");
