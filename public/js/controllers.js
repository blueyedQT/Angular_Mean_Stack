miniStore.controller('Customers', function($scope, CustomerFactory){
	$scope.customers = CustomerFactory.getCustomers();
	$scope.addCustomer = function(){
		// console.log('Scope: '+ $scope.new_customer.name);
		CustomerFactory.addCustomer($scope.new_customer.name);
	};
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