var miniStore = angular.module('miniStore', ['ngRoute']);
miniStore.config(function($routeProvider){
	$routeProvider
	.when('/orders', {templateUrl: 'partials/orders.html'})
	.when('/customers', {templateUrl: 'partials/customers.html'});
});
// var customers = function(){
// 	return $http.get('/cusotmers_json').success(function(data){
// 		angular.copy(data);
// 	});
// };
// var products =[
// 	{name: 'Nike Shoes'},
// 	{name: 'Black Belts'},
// 	{name: 'Ice Cream'},
// 	{name: 'Candies'}
// ];
var orders = [
	{customer_name: 'Katrina', product: 'Nike Shoes', quantity: 2, date: 'December 17 2014'},
	{customer_name: 'Joey', product: 'Ice Creams', quantity: 4, date: 'January 1 2015'}
];