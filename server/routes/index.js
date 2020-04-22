var express = require('express');
var router = express.Router();
var User = require('../models/user');

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
        login: req.body.login,
        email: req.body.email,
        password: req.body.password
      };
  
      // use schema's create method
      User.create(userData, function(error, user) {
        if (error) {
          return next(error);
        } else {
          req.session.userId = user._id;
          return res.redirect('/profile');
        }
      });
  
  
    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
  })

  module.exports = router;