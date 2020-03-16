var keystone = require('keystone');
var Types = keystone.Field.Types;

var Scan = new keystone.List('Scan', {
	track: true,
});

Scan.add({
	scanner:   { type: Types.Relationship, ref: 'Device', index: true },
	scannerFP: { type: String },
	scannerIP: { type: String },
	target:    { type: Types.Relationship, ref: 'Device', index: true },
	status:    { type: Types.Select, options: 'success, error, warning, failure', initial: true }
});

Scan.defaultColumns = 'scanner, target, status';
Scan.register();
