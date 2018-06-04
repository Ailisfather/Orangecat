var express = require("express");
var orangecat = express();

orangecat.set("view engine", "ejs")

orangecat.get("/",function(req, res){
	res.render("homepage")
});

orangecat.get("/about",function(req, res){
	res.render("homepage")
});

orangecat.listen(PORT, () => console.log(`Listening on ${ PORT }`));