var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friends = require("./data/friends.js")

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get("/friends", function(req, res) {
    // console.log(friends);
    return res.json(friends);
});

app.post("/friends", function(req, res) {
    res.send("You added a new friend")
   
    var newFriend = req.body;
    
    friends.push(newFriend);
    console.log(req.body);
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  