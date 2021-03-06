var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var _ = require('underscore');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 20,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  subscriptions: {
    type: Array
  }
});

//authenticate method
UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email })
      .exec(function (error, user) {
        if (error) {
          return callback(error);
        } else if ( !user ) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password, function(error, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
}

// hash password
UserSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

// // check if subcriptions unique values
// UserSchema.pre('update', function (next) {
//   this.subscriptions = _.uniq(this.subscriptions);
//   next();
// })

var User = mongoose.model('User', UserSchema);
module.exports = User;