miniStore.controller('Customers', function($scope, CustomerFactory){
	$scope.addCustomer = function(){
		console.log($scope.new_customer);
		CustomerFactory.addCustomer($scope.new_customer);
	};
	CustomerFactory.getCustomers(function(data) {
		$scope.customers = data;
	});
	$scope.errors = CustomerFactory.getErrors();
	$scope.removeCustomer = function(name){
		console.log(name);
		CustomerFactory.removeCustomer(name);
	};
});

miniStore.controller('Orders', function($scope, OrderFactory){
	OrderFactory.getCustomers(function(data) {
		$scope.customers = data;
	});
	OrderFactory.getProducts(function(data) {
		$scope.products = data;
	});
	OrderFactory.getOrders(function(data) {
		$scope.orders = data;
	});
	$scope.addOrder = function(){
		OrderFactory.addOrder($scope.new_order);
	};
});