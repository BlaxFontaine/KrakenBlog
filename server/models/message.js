var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    maxlength: 140,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;