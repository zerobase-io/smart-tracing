var keystone = require('keystone');
var User = keystone.list('User');

module.exports = function (done) {
	new User.model({
		name: {
			first: 'Test',
			last: 'User'
		},
		email: 'test@staging.io',
		password: 'please_change_me',
		isAdmin: true,
		isProtected: true,
	})
	.save(done);
};
