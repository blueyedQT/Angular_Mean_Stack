var store = require('./../server/controllers/store.js');

module.exports = function Routes(app){
	app.get('/', function(req, res){
		store.index(req, res);
	});
	app.get('/get_customers', function(req, res){
		store.get_customers(req, res);
	});
	app.post('/add_customer', function(req, res){
		store.add_customer(req, res);
	});
	app.get('/remove_customer/:id', function(req, res){
		store.remove_customer(req, res);
	});
	app.get('/get_products', function(req, res){
		store.get_products(req, res);
	});
	// app.get('/get_orders', function(req, res){
	// 	store.get_orders(req, res);
	// });
	app.post('/add_order', function(req, res){
		store.add_order(req, res);
	});
};