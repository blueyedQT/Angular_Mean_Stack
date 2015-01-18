miniStore.factory('CustomerFactory', function($http){
	var errors = {};
	var factory = {};
	var customers = [];
	factory.getCustomers = function(callback){
		$http.get('/get_customers').success(function(output){
			customers = output;
			callback(customers);
		});
	};
	factory.addCustomer = function(info){
		for(var i=0; i<customers.length; i++){
			if(customers[i].name === info.name){
				errors.message = 'The name already exisits in our system';
				return false;
			}
		}
		var customer = {
			name: info.name, 
			date_created: Date.now()
		};
		$http.post('/add_customer', info).success(function(output){
			customers.push(customer);
		});
		errors.message = '';
	};
	factory.getErrors = function(){
		return errors;
	};
	factory.removeCustomer = function(info){
		$http.get('/remove_customer/'+info).success(function(output){
			for(var i = 0; i<customers.length; i++){
				if(customers[i].name === info) {
					customers.splice(i, 1);
				}
			}
		});	
	};
	return factory;
});

miniStore.factory('OrderFactory', function($http){
	var factory = {};
	var customers = [];
	var products = [];
	var orders = [];
	factory.getCustomers = function(callback){
		$http.get('/get_customers').success(function(output){
			customers = output;
			callback(customers);
		});
	};
	factory.getProducts = function(callback){
		$http.get('/get_products').success(function(output){
			products = output;
			callback(products);
		});
	};
	factory.getOrders = function(callback){
		$http.get('/get_orders').success(function(output){
			orders = output;
			callback(orders);
		});
	};
	factory.addOrder = function(info){
		console.log(info);
		var order = {
			customer: info.customer, 
			product: info.product,
			quantity: info.quantity,
			date_created: Date.now()
		};
		$http.post('/add_order', info).success(function(output){
			orders.push(order);
		});
	};
	return factory;
});