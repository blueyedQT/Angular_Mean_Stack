var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
	name: String,
	date_created: {
		type: Date,
		default: Date.now
	},
	hidden: Boolean
});
// CustomerSchema.path('name').required(true, 'Customer name cannot be blank');
mongoose.model('Products', ProductSchema);