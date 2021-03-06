// *** Dependencies
// =============================================================
const express = require("express");
const passport = require('passport');
const routes = require("./routes");
const mongoose = require("mongoose");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(cors());

app.use(passport.initialize());

// Static directory
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
// =============================================================
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_ldr06pdp:2u3tf1fvni4hgrgf928a71rijf@ds151066.mlab.com:51066/heroku_ldr06pdp", { useNewUrlParser: true });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});