const dbPass = process.env.dbPass;
var express = require('express'),
app = express(),
port = process.env.PORT || 3001,
mongoose = require('mongoose'),
Message = require('./api/models/portModel'),
bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://livioludolff:'+dbPass+'@cluster0.p68el3f.mongodb.net/portdb?retryWrites=true&w=majority/portdb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors({origin: '*'}));
var routes = require('./api/routes/portRoutes');
routes(app);
app.listen(port);
console.log('Portfolio RESTful API server started on: ' + port);