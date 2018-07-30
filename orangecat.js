var express = require('express')
const path = require('path')
var orangecat = express()
var bodyParser = require("body-parser");

orangecat.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 5000
orangecat.use(express.static(path.join(__dirname, '/rcs')))
//orangecat.set("view engine", "ejs")

orangecat.get("/",function(req, res){
	res.render("homepage.ejs")
});

orangecat.get("/fractaltree1",function(req, res){
	res.render("fractaltree1.ejs")
});

orangecat.get("/starfield",function(req, res){
	res.render("starfield.ejs")
});

orangecat.get("/pac",function(req, res){
	res.render("pac.ejs")
});

orangecat.get("/singlepen",function(req, res){
	res.render("singlepen.ejs")
});

orangecat.listen(PORT, () => console.log(`Listening on ${ PORT }`));