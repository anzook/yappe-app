const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();
// const routes = require("./routes");

// Requiring our models for syncing
const db = require('./client/src/models');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
// app.use(routes);
// require('./src/routes/html-routes.js')(app);
require('./client/src/routes/pet-api-routes.js')(app, db);
require('./client/src/routes/user-api-routes.js')(app, db);


// Connect to the Database
// Sync db and then Start the API server
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
