var store = require('./../server/controllers/store.js');
module.exports = function Routes(app){
	app.get('/', function(req, res){
		store.index(req, res);
	});
};