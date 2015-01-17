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
		CustomerFactory.removeCustomer(name);
	};
});

miniStore.controller('Orders', function($scope, OrderFactory){
	$scope.customers = OrderFactory.getCustomers();
	$scope.products = OrderFactory.getProducts();
	$scope.orders = OrderFactory.getOrders();
	$scope.addOrder = function(){
		OrderFactory.addOrder($scope.new_order);
	};
});