const userRoute = require('../server/routes/user.routes')
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var cors = require('cors');
var app = express();

app.use(cors());


// mongodb connection
mongoose.connect("mongodb://localhost:27017/krakenblog", { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

//mongo error
db.on('error', console.error.bind(console, 'connection error:'));

//use sessions for tracking logins
app.use(session({
	secret: 'kraken loves you',
	resave: true,
  	saveUninitialized: false,
	store: new MongoStore({
		mongooseConnection: db
	})
}))

//make user ID available in templates
app.use(function (req, res, next) {
	res.locals.currentUser = req.session.userId;
	next();
});

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include index routes
var routes = require('./routes/index');
app.use('/', routes);

// include message routes
var messRoutes = require('./routes/messages/index');
app.use('/messages', messRoutes);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('File Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// define as the last app.use callback
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

// listen on port 5000
app.listen(5000, function () {
  console.log('Express app listening on port 5000');
});
