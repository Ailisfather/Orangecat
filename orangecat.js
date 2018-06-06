var express = require("express");
var orangecat = express();
const PORT = process.env.PORT || 5000

//orangecat.set("view engine", "ejs")

orangecat.get("/",function(req, res){
	res.render("homepage.ejs")
});

orangecat.get("/about",function(req, res){
	res.render("about.ejs")
});

orangecat.get("/1",function(req, res){
	res.render("index.html")
});

orangecat.listen(PORT, () => console.log(`Listening on ${ PORT }`));