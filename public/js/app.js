var miniStore = angular.module('miniStore', ['ngRoute']);
miniStore.config(function($routeProvider){
	$routeProvider
	.when('/orders', {templateUrl: 'partials/orders.html'})
	.when('/customers', {templateUrl: 'partials/customers.html'});
});