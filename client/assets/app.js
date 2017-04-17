var app = angular.module('app', ['ngRoute']);

// *********** ROUTES ***********
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '../partials/index.html',
		controller: 'IndexController'
	})
	.when('/new', {
		templateUrl: '../partials/new.html',
		controller: 'NewFriendController'
	})
	.when('/edit/:id', {
		templateUrl: '../partials/edit.html',
		controller: 'EditFriendController'
	})
	.when('/friend/:id', {
		templateUrl: '../partials/show.html',
		controller: 'ShowFriendController'
	})
	.otherwise('/')
})