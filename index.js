var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const { Schema } = mongoose;
var path=require('path');
const projectSchema = new Schema({ idea: String,name: String, market:String, continent:String, country:String }, { timestamps: true });
//const Project = mongoose.model('Project', projectSchema);

const app = express()

const Register = require("./models/registers")

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

const home = require('./routes/homerouter');
app.use(home);

const proj = require('./routes/projectrouter');
app.use(proj);


app.listen(8081);


console.log("Listening on PORT 8081");
