var path = require('path');
var friends = require("../data/friends.js")

// Module exports and function, PASSING app as an argument so express works!!
module.exports = function(app) {

// Get full list of friends currently on the server
app.get("/friends", function(req, res) {
    res.json(friends);

});

// Logic for a post that matches user to the best friend
app.post("/friends", function(req, res) {

    //creating empty object for the best match
    var friendMatch = {
        name: "",
        photo: "",
        scoreDifference: 9000
    }

    // Setting up variables for logic below

    // Get all the friends!
    var newFriend = req.body;

    // Set all the incoming friend's scores to a variable
    var friendScores = newFriend.scores;

    // Make an empty difference array to help with finding the best match (smallest difference)
    var scoreDifferenceArray = [];

    // Making variables for the best match
    var friendmatch;
    var friendMatchIndex;

    // first forloop to go through all the friends
    for (var i = 0; i < friends.length; i++) {
       
        // new var for score difference
        var scoreDifference = 0;

        // nested forloop to gget all the scores of each friend in the first forloop
        for ( var j = 0; j < friends[i].scores[j]; j++) {

            // math logic to take user's score and find difference between friend's scores, then make it an absolute value
            scoreDifference += Math.abs((parseInt(friendScores[j]) - parseInt(friends[i].scores[j])));
    
        }

        // Push all the calculated scores differences into the scoreDifferenceArray
        scoreDifferenceArray.push(scoreDifference)
    }

    // Use math.min to go through the entire scoreDifferenceArray and find the lowest number (smallest difference in this case)
    friendMatchIndex = scoreDifferenceArray.indexOf(Math.min(...scoreDifferenceArray));

    // pull out the match!
    friendMatch = friends[friendMatchIndex];

    // Post it up and console it out
    res.json(friendMatch);
    console.log(friendMatch)

    // Push the match into your friends
    friends.push(newFriend);

});

}