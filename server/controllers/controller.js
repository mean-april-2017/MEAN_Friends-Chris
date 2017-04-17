var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
// Controller Methods Go Here
	// Index
	index: function(req,res) {
		Friend.find({}, function(err,friends) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.redirect('/');
			} else {
				console.log("SERVER: Here are all my friends!");
				res.json(friends);
			}
		});
	},
	// Create
	create: function(req,res) {
		var newFriend = new Friend({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			birthdate: req.body.birthdate
		});
		newFriend.save(function(err) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.redirect('/');
			} else {
				console.log('SERVER: Made a new friend!')
				res.json(newFriend);
			}
		});

	},
	// Update
	update: function(req,res) {
		Friend.findOne({_id: req.params.id}, function(err, thisFriend) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.redirect('/');
			} else {
				thisFriend.firstName = req.body.firstName;
				thisFriend.lastName = req.body.lastName;
				thisFriend.birthdate = req.body.birthdate;

				thisFriend.save(function(err) {
					if(err) {
						console.log("*********** ERRORS ***********");
						console.log(err);
						console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
						res.redirect('/');
					} else {
						res.json({message: 'Friend Updated!', friend: thisFriend});
					}
				});
			}
		});
	},
	// Delete
	delete: function(req,res) {
		Friend.remove({_id: req.params.id}, function(err) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.redirect('/');
			} else {
				res.json({message: 'Friend Deleted! (id: ' + req.params.id + ')'});
			}
		});
	},
	// Show
	show: function(req,res) {
		Friend.findOne({_id: req.params.id}, function(err, thisFriend) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.redirect('/');
			} else {
				res.json(thisFriend);
			}
		});
	}
}