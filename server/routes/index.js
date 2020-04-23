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