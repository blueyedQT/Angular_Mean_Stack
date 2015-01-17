var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CustomerSchema = new mongoose.Schema({
	name: String,
	date_created: {
		type: Date,
		default: Date.now
	},
	hidden: Boolean
});
// CustomerSchema.path('customer_name').required(true, 'Customer name cannot be blank');
mongoose.model('Customers', CustomerSchema);