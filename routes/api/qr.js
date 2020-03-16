var keystone = require('keystone');
var async = require('async');
var _ = require('lodash');
//var exec = require('child_process').exec;
//var randomstring = require('randomstring');

var User   = keystone.list('User');
var Scan   = keystone.list('Scan');
var Device = keystone.list('Device');
var Scan   = keystone.list('Scan');

/**
 * 
 */
exports.create = function(req, res) {
  //data = (req.method == 'POST') ? req.body : req.query;
  var locals = {
    newDevice: false
  }

  var data = (req.method == 'POST') ? req.body : req.query;
  console.log('Create:', data);
  var fingerprint = data.fingerprint ? data.fingerprint : undefined
  var ip = data.ip ? data.ip : undefined

  async.series([
    
    // Perform basic validation
    // function(next) {
    //   if (!formatted.email || !formatted.password) {
    //     console.log('[api.app.siginup] - Failed signing up.');
    //     console.log('------------------------------------------------------------');
    //     return res.apiResponse({
    //       success: false,
    //       session: false,
    //       message: 'Error!'
    //     });
    //   }
    //   return next();
    // },
    // Create user
    function(next) {
      console.log('[api.app.signup]  - Creating new device...');
      console.log('------------------------------------------------------------');

      locals.newDevice = new Device.model({
        initFP: fingerprint,
        initIP: ip
      });
      locals.newDevice.save(function(err) { // todo change to newDevice.updateItem() for validation //https://keystonejs.com/getting-started/setting-up/part-4/
        if (err) {
          console.log('[api.app.signup]  - Error saving new device.', err);
          console.log('------------------------------------------------------------');
          return next({ message: 'Sorry, there was an error processing your account, please try again.' });
        }
        console.log('[api.app.signup]  - Saved new device.');
        console.log('------------------------------------------------------------');
        
        return res.apiResponse({
          success: true,
          dvid: locals.newDevice._id
        });
      });
    }
  ], function(err) {
    if (err) {
      return res.apiResponse({
        success: false,
        session: false,
        message: (err && err.message ? err.message : false) || 'Sorry, there was an issue, please try again.'
      });
    }
  });
}

exports.createAlt = function(req, res) {
  //data = (req.method == 'POST') ? req.body : req.query;
  var locals = {
    newDevice: false
  }
  var data = (req.method == 'POST') ? req.body : req.query;  
  console.log(data);

  var fingerprint = data.fingerprint ? data.fingerprint : undefined
  var ip = data.ip ? data.ip : undefined
  // Additional Security Features
  // - query to see if parent id exists
  // - query to see if count of all ids associated with parent is less than 5

  if(Number(data.dvid_c) < 5 && data.dvid){
    async.series([
      function(next) {
        console.log('[api.app.signup]  - Creating new device id...');
        console.log('------------------------------------------------------------');

        locals.newDevice = new Device.model({
          parent: data.dvid,
          initFP: fingerprint,
          initIP: ip
        });
        locals.newDevice.save(function(err) { // todo change to newDevice.updateItem() for validation //https://keystonejs.com/getting-started/setting-up/part-4/
          if (err) {
            console.log('[api.app.signup]  - Error saving new device.', err);
            console.log('------------------------------------------------------------');
            return next({ message: 'Sorry, there was an error processing your account, please try again.' });
          }
          console.log('[api.app.signup]  - Saved new device.');
          console.log('------------------------------------------------------------');
          console.log('created:', locals.newDevice._id);
          return res.apiResponse({
            success: true,
            dvid: locals.newDevice._id
          });
        });
      }
    ], function(err) {
      if (err) {
        return res.apiResponse({
          success: false,
          message: (err && err.message ? err.message : false) || 'Sorry, there was an issue, please try again.'
        });
      }
    });
  } else {
    return res.apiResponse({
      success: false,
      message: 'Exceeded generation limit. Please contact us.'
    });
  }
}

exports.scan = function(req, res) {
  //data = (req.method == 'POST') ? req.body : req.query;
  var locals = {
    newScan: false
  }
  var data = (req.method == 'POST') ? req.body : req.query;  
  console.log(data);

  var dvid = data.dvid ? data.dvid : undefined
  var sdvid = data.sdvid ? data.sdvid : undefined
  var fingerprint = data.fingerprint ? data.fingerprint : undefined
  var ip = data.ip ? data.ip : undefined

  if(dvid && sdvid){
    // Additional Security Features:
    // search for dvid and sdvid to confirm
    async.series([
      function(next) {
        console.log('[api.app.signup]  - Registering new scan');
        console.log('------------------------------------------------------------');

        locals.newScan= new Scan.model({
          scanner:   dvid,
          scannerIP: ip,
          scannerFP: fingerprint,
          target:    sdvid
        });
        locals.newScan.save(function(err) { // todo change to newDevice.updateItem() for validation //https://keystonejs.com/getting-started/setting-up/part-4/
          if (err) {
            if(err.errors.target && err.name == 'ValidationError'){
              return next({ name: 'ValidationError', message: 'Scanned ID is invalid', which:'target' });
            } else {
              //console.log('[api.app.signup]  - Error saving new scan.', err);
              console.log('------------------------------------------------------------');
              return next({ message: 'Sorry, there was an error processing your account, please try again.' });
            }
          }
          console.log('[api.app.signup]  - Saved new scan.');
          console.log('------------------------------------------------------------');
          console.log('created:', locals.newScan._id);
          return res.apiResponse({
            success: true,
            scan: locals.newScan._id
          });
        });
      }
    ], function(err) {
      if (err) {
        console.log(err);
        return res.apiResponse({
          success: false,
          validId: false,
          message: (err && err.message ? err.message : false) || 'Sorry, there was an issue, please try again.',
          name: (err && err.name ? err.name : false) || undefined,
          which: (err && err.which ? err.which : false) || undefined,
        });
      }
    });
  } else {
    // Log errors to Errors
    return res.apiResponse({
      success: false,
      message: 'Error'
    });
  }

}
exports.init = function(req, res) {
  //data = (req.method == 'POST') ? req.body : req.query;

  // if(!req.user){
  //   console.log('[api.dashboard.init] - No User, Access Denied');
  //   console.log('------------------------------------------------------------');
  //   return res.apiResponse({
  //     success: false,
  //     message: 'Not authenticated'
  //   });
  // }

  User.model.findById(req.user._id)
  .select('currentMove')
  .populate('currentMove')
  .exec(function(err, user) {
    if(err){
      console.log('[api.dashboard.init] - Error in finding user');
      console.log('------------------------------------------------------------');
      return res.apiResponse({success: false, session: false})
    }
    if(!user){
      console.log('[api.dashboard.init] - No User Found');
      console.log('------------------------------------------------------------');
      return res.apiResponse({success: false,session: false, message: 'Sorry there was an issue finding your profile. Please log in again.'})
    }
    res.apiResponse({
      success: true,
      currentMove: user.currentMove
    });
  });
}