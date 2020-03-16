var keystone = require('keystone');
var Types = keystone.Field.Types;

var Device = new keystone.List('Device', {
	track: true,
});

Device.add({
	location:        {type: Boolean, label: 'Does device ID represent a location?'},
	address:         {type: Types.Location},
	lastActive:      {type: Types.Datetime},
	parent:          {type: Types.Relationship, ref: 'Device', index: true },
	nickname:        {type: String},
	test: 		     {type: Boolean, label: 'Confirmed postive or negative test'},
	testDate:        {type: Types.Datetime},
	symptomatic:     {type: Boolean, label: 'Self described as symptomatic'},
	symptomaticDate: {type: Types.Datetime},
	initFP: 	     {type: String, index:true},
	initIP:          {type: String, index:true }
});

Device.relationship({ ref: 'Scan',   path: 'scans',   refPath: 'scanner'   });
Device.relationship({ ref: 'Scan',   path: 'scans',   refPath: 'target'    });
Device.relationship({ ref: 'Device', path: 'devices', refPath: 'parent' });

Device.defaultColumns = 'location, lastActive, createdBy';
Device.register();
