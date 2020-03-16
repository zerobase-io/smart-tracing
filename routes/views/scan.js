var keystone = require('keystone');
var Scan = keystone.list('Scan');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	console.log(req.params.dvid);

	// view.on('init', function (next) {
	// 	if (req.params.category) {
	// 		Scan.model.findOne({ key: locals.filters.category }).exec(function (err, result) {
	// 			locals.category = result;
	// 			next(err);
	// 		});
	// 	} else {
	// 		next();
	// 	}
	// });

	view.render('index', {
		section: 'home',
	});

}
