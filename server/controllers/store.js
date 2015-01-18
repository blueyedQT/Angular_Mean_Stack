var mongoose = require('mongoose');
var Customer = mongoose.model('Customers');
var Product = mongoose.model('Products');
var Order = mongoose.model('Orders');

module.exports = {
	index: function(req, res) {
		res.render('index', {});
	},
	get_customers: function(req, res) {
		Customer.find({}, function(err, results){
			console.log(err);
			res.send(results);
		});
	},
	add_customer: function(req, res) {
		var a = new Customer(req.body);
		a.save(function(err, result) {
			if(err){
				res.send(err);
			} else {
				res.send(result._id);
			}
		});
	},
	remove_customer: function(req, res) {
		console.log(req.params.id);
		Customer.remove({ name: req.params.id }, function(err){
			if(err) {
				res.send(JSON.stringify(err));
			} else {
				res.send('deleted');
			}
		});
	},
	get_products: function(req, res) {
		Product.find({}, function(err, results){
			res.send(results);
		});
	},
	get_orders: function(req, res) {
		Order.find({}, function(err, results){
			res.send(results);
		});
	},

	add_order: function(req, res){
		var a = new Order(req.body);
		a.save(function(err, result){
			if(err){
				res.send(err);
			} else {
				res.send(result._id);
			}
		});
	}
}