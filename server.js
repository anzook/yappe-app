const express = require("express");
const app = express();
const path = require('path');
const session = require('express-session')
const PORT = process.env.PORT || 3001;
require('dotenv').config();
// const routes = require("./routes");
const passport = require('./config/passport');


// Requiring our models for syncing
const db = require('./models');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));


app.use(session({secret: 'keyboard dog', proxy: true, resave: true,
  saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}
else {
  app.use(express.static(path.join(__dirname, '/client/public')));
}

// Add routes, both API and view
// app.use(routes);
// require('./src/routes/html-routes.js')(app);
require('./routes/pet-api-routes.js')(app, db);
require('./routes/user-api-routes.js')(app, db);
require('./routes/action-api-routes.js')(app, db);


// Connect to the Database
// Sync db and then Start the API server
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
