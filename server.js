var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './client/bower/components')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// *********** MONGOOSE ***********
var mongoose = require('mongoose');
require('./server/config/mongoose.js');

// *********** ROUTES ***********
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// *********** LISTEN ***********
app.listen(8000, function() {
	console.log("------------------------------------");
	console.log("Listening on port 8000...");
	console.log("------------------------------------");
	
});