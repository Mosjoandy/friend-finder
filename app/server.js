var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friends = require("./data/friends.js")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//////////////////////////show me the pages//////////////////////////////////

require("./routing/htmlRoutes.js")(app);

//////////////////////////utilize the apis//////////////////////////////////

require("./routing/apiRoutes.js")(app);

////////////////////////End of the Line////////////////////////////////////

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  