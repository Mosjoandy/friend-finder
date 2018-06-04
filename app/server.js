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
    res.json(friends);

});

//////////////////////////compare to the friendslist//////////////////////////////////

// app.post("/friends", function(req, res) {

//     var friendMatch = {
//         name: "",
//         photo: "",
//         scoreDifference: 9000
//     }

//     var newFriend = req.body;
//     var friendScores = newFriend.scores;

//     for (var i = 0; friends.length; i++) {
//         console.log(friends[i].name);
//     }
    // forloop all friends back
    // forloop through all the scores arrays
    // friends scores - user's score
    // if (difference <= 5) {
        // get friends name
        // get friends photo
    // }
    // push found friend into a new array
    // modal the result of the new array[0] to survey page

// });

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
  