var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = {
	index: function(req, res){
		// res.render('index', {title: 'Welcome to the Mean Stack Store'});
		res.render('index');
	}	
}