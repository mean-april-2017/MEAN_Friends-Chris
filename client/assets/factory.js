app.factory('friendsFactory', function($http) {
	var factory = {};

	// Index
	factory.index = function(callback) {
		$http.get('/friends').then(function(returned_data) {
			console.log("FACTORY: Found all friends:,", returned_data);
			callback(returned_data.data);
		});
	};

	// Find One Friend
	factory.findFriend = function(id, callback) {
		$http.get('/friend/'+id).then(function(returned_data) {
			callback(returned_data);
		});
	}

	// New Friend
	factory.create = function(friendObj, callback) {
		$http.post('/friend/new', friendObj).then(function(returned_data) {
			callback(returned_data);
		});
	};

	// Delete Friend
	factory.delete = function(id, callback) {
		$http.delete('/friend/delete/'+id).then(function(returned_data) {
			callback(returned_data);
		});
	}

	// Update Friend
	factory.update = function(id, friendObj,callback) {
		$http.put('/friend/update/'+id, friendObj).then(function(returned_data) {
			callback(returned_data);
		});
	}

	return factory;
});