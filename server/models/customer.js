var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
	name: String,
	date_created: {
		type: Date,
		default: Date.now
	},
	hidden: Boolean
});
// CustomerSchema.path('customer_name').required(true, 'Customer name cannot be blank');
mongoose.model('Customer', CustomerSchema);