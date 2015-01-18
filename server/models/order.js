var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
	customer: String,
	product: String,
	quantity: Number,
	date_created: {
		type: Date,
		default: Date.now
	},
	hidden: Boolean
});
// CustomerSchema.path('name').required(true, 'Customer name cannot be blank');
mongoose.model('Orders', OrderSchema);