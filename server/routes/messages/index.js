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

// GET /messages/edit
router.route('/messageedit/:id').get((req, res) => {
  console.log('hello', req.params.id);
  Message.find({'id': req.params.id })
  .then((data) => {
    res.send(data);
  })
  .catch(function (err) {
      console.log(err)
  });
})

// PUT /message/update
router.route('/update/:id').put((req, res, next) => {
  console.log('Updating message');
  Message.update({'id':req.params.id }, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Message updated successfully !')
    }
  })
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

  // Delete Message
router.route('/deletemessage/:id').delete((req, res, next) => {
  Message.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

  module.exports = router;