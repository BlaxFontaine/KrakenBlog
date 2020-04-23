var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mid = require('../middleware');

// GET /profile
router.get('/profile', mid.requiresLogin, function(req, res, next) {
  User.findById(req.session.userId)
      .exec(function (error, user) {
        if (error) {
          return next(error);
        } else {
          return res.render('profile', { title: 'Profile', name: username });
        }
      });
});

// GET /logout
router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        console.log(err);
      }
    });
  }
});

// GET /login
router.get('/login', mid.loggedOut, function(req, res, next) {
  return res.render('login', { title: 'Log In'});
});


// POST /login
router.post('/login', function(req, res, next) {
  console.log(req.body);
  if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      }  else {
        req.session.userId = user._id;
        console.log('You are logged in.')
        
      }
    })
  } else {
    var err = new Error('Email and password are required.');
    err.status = 401;
    return next(err);
  }
});

/*// GET /register
router.get('/register', mid.loggedOut, function(req, res, next) {
  return res.render('register', { title: 'Sign Up' });
});*/

// POST /register
router.post('/register', function(req, res, next) {
    if (req.body.username &&
      req.body.email &&
      req.body.password &&
      req.body.confirmPassword) {
  
      // confirm password match
      if (req.body.password !== req.body.confirmPassword) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        return next(err);
      }
  
      // create user
      var userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      };
  
      // use schema's create method
      User.create(userData, function(error, user) {
        if (error) {
          res.status(500).send('User not saved')
        } else {
          // req.session.userId = user._id;
          res.status(200).send('User saved')
        }
      });
  
  
    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
  })

  module.exports = router;