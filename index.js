var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const { Schema } = mongoose;
var path=require('path');

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


const home = require('./routes/homerouter');
app.use(home);

const proj = require('./routes/projectrouter');
app.use(proj);

app.listen(8081);


console.log("Listening on PORT 8081");
