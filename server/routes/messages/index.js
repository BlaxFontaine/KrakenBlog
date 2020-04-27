var express = require('express');
var router = express.Router();
var Message = require('../../models/message');
var mid = require('../../middleware');
var ObjectId = require('mongodb').ObjectId

// GET /messages/user_id
router.get('/', function (req, res, next) {
  Message.find({user: ObjectId(req.query.user)})
      .exec(function (error, messages) {
        if (error) {
          return next(error);
        } else {
          res.json(messages);
        }
      });
})

// // GET /messages
// router.get('/', function (req, res, next) {
//   Message.find({})
//       .exec(function (error, messages) {
//         if (error) {
//           return next(error);
//         } else {
//           res.json(messages);
//         }
//       });
// })

// POST /messages/add
router.post('/add', function (req, res, next) {
    if (req.body.content && req.body.user) {
  
      // create message
      var messageData = {
        content: req.body.content,
        user: req.body.user
      };
  
      // use schema's create method
      Message.create(messageData, function(error, message) {
        if (error) {
          return next(error);
        } else {
          res.json(message);
        }
      });
  
  
    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
  })

  module.exports = router;