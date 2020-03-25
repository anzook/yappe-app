const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

// Telling passport we want to use a Local Strategy.
// In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: 'email',
    },
    function(email, password, done) {
    // When a user tries to sign in this code runs
    // console.log(email, password);
      db.user.findOne({
        where: {
          email: email,
        },
      }).then(function(dbUser) {
      // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: 'Incorrect username/password.',
          });
        };
        // If there is a user with the given email,
        // but the password the user gives us is incorrect

        if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: 'Incorrect username/password.',
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    },
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	db.User.findOne(
		{ _id: id },
		'username',
		(err, user) => {
			console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})

// Exporting our configured passport
module.exports = passport;
