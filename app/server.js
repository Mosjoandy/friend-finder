var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friends = require("./data/friends.js")

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//////////////////////////show me the survey//////////////////////////////////

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));    
});

//////////////////////////show me the friendlist//////////////////////////////////

app.get("/friends", function(req, res) {
    // res.json(friends);

    for (var i = 0; i < 2; i++) {
        res.json(friends[i]);
    }


});

////////////////////////whole list of friends////////////////////////////////////

app.post("/friends", function(req, res) {
    res.send("You are searching for a new friend!")
   
    var newFriend = req.body;
    
    friends.push(newFriend);

    console.log(req.body);
});


////////////////////////End of the Line////////////////////////////////////

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  