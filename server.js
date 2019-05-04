// *** Dependencies
// =============================================================
const express = require("express");
const passport = require('passport');
const routes = require("./routes");
const mongoose = require("mongoose");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

// Static directory
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
// =============================================================
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/helpdesk", { useNewUrlParser: true });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});