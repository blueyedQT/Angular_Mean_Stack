var mongoose = require('mongoose');
var Customers = mongoose.model('Customers');

module.exports = {
	index: function(req, res) {
		res.render('index', {});
		// res.render('index', {title: 'Welcome to the Mean Stack Store'});
	},
	// index_json: function(req, res) {
	// 	Customer.find({}, function(err, customer_array) {
	// 		res.send(JSON.stringify(results));
	// 	});
	// },
	get_customers: function(req, res) {
		Customers.find({}, function(err, results){
			console.log(err);
			res.send(results);
		});
	},
	add_customer: function(req, res) {

		console.log('Sever controller customer: '+ req.body);
		var a = new Customers(req.body);
		a.save(function(err){
			if(err){
				res.send('No');
			} else {
				res.send('YES');
			}
		});
		// Customer.save(function (err, result){
		// 	res.send(JSON.stringify(result));
		// });
	}
}