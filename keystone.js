//var keystone = require('./keystone');
//console.log(keystone);

//require('dotenv').config()

var keystone = require('keystone');
keystone.init({

	'name': 'Central Command',
	'brand': 'Zerobase',
	'admin path' : process.env.ADMIN_PATH || 'access',
	'user model': 'User',

	'favicon': 'public/favicon.ico',
	'less': 'public',
	'static': 'public',

	'views': 'templates/views',
	'view engine': 'pug',
	// 'ssl': 'force',
	'auto update': true,
	'mongo': process.env.MONGO_URI || 'mongodb://localhost/zerobase-staging_demo4',
	'cloudinary config': process.env.CLOUDINARY || 'cloudinary://415399583516864:NzrhG4z72Csxl48JNZTsN73yKMw@dp077srti',

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET || 'demo',

	'ga property': process.env.GA_PROPERTY,
	'ga domain': process.env.GA_DOMAIN,

	'chartbeat property': process.env.CHARTBEAT_PROPERTY,
	'chartbeat domain': process.env.CHARTBEAT_DOMAIN

});

keystone.import('models');

keystone.set('signin logo', '../images/logo.png');
keystone.set('session store', 'mongo');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
	ga_property: keystone.get('ga property'),
	ga_domain: keystone.get('ga domain'),
	chartbeat_property: keystone.get('chartbeat property'),
	chartbeat_domain: keystone.get('chartbeat domain')
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
	'scans': ['devices', 'scans', 'users'],
	'field-tests': 'examples'
});

keystone.start();
