var path = require('path');

// Module exports and function, PASSING app as an argument so express works!!
module.exports = function(app) {

    // If a user goes to /survey, they will get the file survey.html from the appropriate directory, same with home below
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));    
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}