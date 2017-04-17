var mongoose = require('mongoose');

var FriendSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	birthdate: Date,
}, {timestamps:true});

mongoose.model('Friend', FriendSchema);