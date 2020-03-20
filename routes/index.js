const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);
const sslRedirect = require('heroku-ssl-redirect');

keystone.pre('routes', function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'Home', key: 'home', href: '/' }
	];
	res.locals.user = req.user;
	next();
});

keystone.pre('render', middleware.flashMessages);

// Handle 404 errors
keystone.set('404', function (req, res, next) {
	res.status(404).render('errors/404');
});

// Handle other errors
keystone.set('500', function (err, req, res, next) {
	var title, message;
	if (err instanceof Error) {
		message = err.message;
		err = err.stack;
	}
	console.log(err);
	console.log(title);
	console.log(message);
	res.status(500).render('errors/500', {
		err: err,
		errorTitle: title,
		errorMsg: message
	});
});

// Load Routes
var routes = {
	api: importRoutes('./api'),
	views: importRoutes('./views'),
};

exports = module.exports = function (app) {

	// enable ssl redirect
	// https://stackoverflow.com/questions/28685092/how-can-i-use-express-js-middleware-in-a-keystone-js-project
	// https://medium.com/@thiscodeworks.com/how-to-redirect-your-node-js-app-hosted-on-heroku-from-http-to-https-50ef80130bff
	app.use(sslRedirect());

	// Views
	app.get('/',           routes.views.index);
	app.all('/c/:dvid',    keystone.middleware.api, routes.api.qr.create);
	app.all('/ca/:dvid',   keystone.middleware.api, routes.api.qr.createAlt);
	app.all('/s-id/:dvid', keystone.middleware.api, routes.api.qr.scan)
	app.all('/s/:dvid',    routes.views.scan);

}
