// *********** ANGULAR CONTROLLERS ***********


// Index Controller
app.controller('IndexController', function($scope, $location, friendsFactory) {
	friendsFactory.index(function(all_friends) {
		$scope.friends = all_friends;
	});

	// Delete a Friend
	$scope.deleteFriend = function(id) {
		friendsFactory.delete(id, function(data) {
			console.log(data.data.message);
			friendsFactory.index(function(all_friends) {
				$scope.friends = all_friends;
			})
		});
	}
});

// New Friend Controller
app.controller('NewFriendController', function($scope, $location, friendsFactory) {
	$scope.makeNewFriend = function() {
		friendsFactory.create($scope.newFriend, function(data) {
		console.log("Created New Friend:", data);
		$location.url('/');
		});
	}
});

// Edit Friend Controller
app.controller('EditFriendController', function($scope, $location, $routeParams, friendsFactory) {
	console.log('$routeParams:',$routeParams.id);
	friendsFactory.findFriend($routeParams.id, function(foundFriend) {
		console.log('data:', foundFriend.data);
		$scope.friend = foundFriend.data;
	});

	$scope.updateFriend = function() {
		friendsFactory.update($routeParams.id, $scope.friend,function(returned_data) {
			console.log(returned_data.data.message);
			$location.url('/');
		});
	}
});

// Show Friend Controller
app.controller('ShowFriendController', function($scope, $location, $routeParams, friendsFactory) {
	friendsFactory.findFriend($routeParams.id, function(foundFriend) {
		$scope.friend = foundFriend.data;
	});

	$scope.deleteFriend = function(id) {
		friendsFactory.delete(id,function(data) {
			console.log(data.data);
			$location.url('/');
		});
	}
});