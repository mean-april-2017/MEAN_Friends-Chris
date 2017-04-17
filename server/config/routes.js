var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
var friends = require('../controllers/controller.js');

module.exports = function(app) {
	app.get('/friends', function(req,res) {
		friends.index(req,res);
	});

	app.post('/friend/new', function(req,res) {
		friends.create(req,res);
	});

	app.delete('/friend/delete/:id', function(req,res) {
		friends.delete(req,res);
	});

	app.put('/friend/update/:id', function(req,res) {
		friends.update(req,res);
	});

	app.get('/friend/:id', function(req,res) {
		friends.show(req,res);
	});
}