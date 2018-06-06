var express = require("express");
var orangecat = express();
const PORT = process.env.PORT || 5000
orangecat.use(express.static(path.join(__dirname, '/ressources')))
//orangecat.set("view engine", "ejs")

orangecat.get("/",function(req, res){
	res.render("homepage.ejs")
});

orangecat.get("/about",function(req, res){
	res.render("about.ejs")
});

orangecat.get("/1",function(req, res){
	res.render("index.ejs")
});

// orangecat.get("/sketch.js",function(req, res){
// 	res.render("sketch.js")
// });

// orangecat.get("/p5.js",function(req, res){
// 	res.render("p5.js")
// });

// orangecat.get("/p5.dom.js",function(req, res){
// 	res.render("p5.dom.js")
// });

// orangecat.get("/p5.sound.js",function(req, res){
// 	res.render("p5.sound.js")
// });

orangecat.listen(PORT, () => console.log(`Listening on ${ PORT }`));