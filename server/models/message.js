var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    maxlength: 140,
  }
});

var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;