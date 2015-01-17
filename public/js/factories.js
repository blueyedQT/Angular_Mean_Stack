// var store = require('/server/controllers/store.js');

miniStore.factory('CustomerFactory', function($http){
	var errors = {};
	var factory = {};
	var customers = [];
	var customer = [];
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


	factory.removeCustomer = function(name){
		$http.post('/remove_customer').success(function(output){
			customer = output;
			callback(customer);
			for(var i = 0; i<customers.length; i++){
				if(customers[i].name === name) {
					customers.splice(i, 1);
				}
			}
		});
	};
	return factory;
});

miniStore.factory('OrderFactory', function(){
	var factory = {};
	factory.getCustomers = function(){
		return customers;
	};
	factory.getProducts = function(){
		return products;
	};
	factory.getOrders = function(){
		return orders;
	};
	factory.addOrder = function(info){
		console.log(info);
		orders.push({
			customer_name: info.name,
			product: info.product,
			quantity: info.quantity,
			date: Date.now()
		});
	};
	return factory;
});