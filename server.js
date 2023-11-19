var express = require('express'),
app = express(),
port = process.env.PORT || 3001,
mongoose = require('mongoose'),
Message = require('./api/models/portModel'),
bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/portdb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/portRoutes');
routes(app);
app.listen(port);
console.log('Portfolio RESTful API server started on: ' + port);