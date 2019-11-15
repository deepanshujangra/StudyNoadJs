// console.log("first express app");

var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.send("hi there");
});

app.get("/dogs", function(req, res){
    res.send("dogs");
});

app.get("*", function(req, res){
    res.send("page not found");
});




app.listen(3000, function(){
    console.log("serving on port 3000 ")
})