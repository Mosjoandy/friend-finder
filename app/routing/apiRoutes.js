var path = require('path');
var friends = require("../data/friends.js")

module.exports = function(app) {

app.get("/friends", function(req, res) {
    res.json(friends);

});

app.post("/friends", function(req, res) {

    var friendMatch = {
        name: "",
        photo: "",
        scoreDifference: 9000
    }

    var newFriend = req.body;
    var friendScores = newFriend.scores;
    var scoreDifferenceArray = [];
    var friendMath;
    var friendIndex;

    for (var i = 0; i < friends.length; i++) {
       
        var scoreDifference = 0;

        for ( var j = 0; j < friends[i].scores[j]; j++) {

            scoreDifference += Math.abs((parseInt(friendScores[j]) - parseInt(friends[i].scores[j])));
    
        }

        scoreDifferenceArray.push(scoreDifference)
    }

    friendMatchIndex = scoreDifferenceArray.indexOf(Math.min(...scoreDifferenceArray));

    friendMatch = friends[friendMatchIndex];

    res.json(friendMatch);
    console.log(friendMatch)

    friends.push(newFriend);

});


}