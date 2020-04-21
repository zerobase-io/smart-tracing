// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint no-undef: 0 */
import config from '../config';
import Fingerprint2 from 'fingerprintjs2';

const { ENV, API_HOST } = config;

// Remove Console Log for non-dev environment
console.log = ENV === 'development' ? console.log : () => {};

if (API_HOST == null) {
  throw new Error('API_HOST not in runtime config!');
}

const defaultRequestOpts = {
  // TODO: simplify requests
  cache: false,
  dataType: 'json',
  contentType: 'application/json',
  processData: false,
};

export const controller = (() => ({
  create: (inputs, callback) => {
    const { fingerprint } = inputs;
    // TODO: Re-name to something more explicit -> createDevice?
    console.log('create -> fingerprint:', fingerprint);
    const req = {
      url: `${API_HOST}/devices/`,
      data: JSON.stringify({ fingerprint }),
      type: 'POST',
      success: (responseData) => {
        console.log('Device ID created:', responseData.id);
        localStorage.setItem('dvid', responseData.id);

        // Update DOM TODO: Refactor/move to Vue controller
        $('#register-notice-agree').removeClass('btn-loading');
        $('#mobile-functions').removeClass('d-none');
        $('#registration-notice').addClass('d-none');
        $('#modal-register-notice').modal('hide');
        //controller.genQR(data.dvid, 'qrcode');
        // TODO is this the best way to trigger a variable redirect?
        console.log(
          'create -> data-redirect value:',
          $('#modal-register-notice').attr('data-redirect'),
        );
        if ($('#modal-register-notice').attr('data-redirect') === 'true') {
          $('#modal-register-notice').attr('data-redirect', 'false');
          $('a[href="#page-code"]').tab('show');
        }
        if (callback) {
          callback({ fingerprint });
        }
      },
      error: (e) => {
        console.log('Error from "create":', e);
        console.log('Arguments from "create":', inputs);
      },
    };
    $.ajax(Object.assign(defaultRequestOpts, req));
  },
  create_user: (inputs) => {
    console.log('create_user -> inputs:', inputs);
    const dvid = localStorage.getItem('dvid');
    const postData = {
      name: '',
      contact: {
        phone: inputs.phone,
        email: '',
      },
      deviceId: dvid,
    };
    console.log('create_user -> postData', postData);
    const req = {
      url: `${API_HOST}/users/`,
      data: JSON.stringify(postData),
      type: 'POST',
      success: (responseData) => {
        console.log('User ID Created:', responseData.id);
        $('#notify-warning').addClass('d-none');
        $('#notify-success').removeClass('d-none');
        $(inputs.button_id).removeClass('btn-loading');
        $(inputs.button_id).replaceWith(
          '<a class="btn btn-secondary btn-block mt-0" href="/" style="border-radius: 0px 0px 3px 3px;">Continue to Zerobase</a>',
        );
      },
      error: (e) => {
        console.log('Error from "create_user":', e);
        console.log('Arguments from "create_user":', inputs);
        $('#notify-warning').removeClass('d-none');
        $(inputs.button_id).removeClass('btn-loading');
        $(inputs.modal_id).find('.alert-warning').removeClass('d-none');
      },
    };
    $.ajax(Object.assign(defaultRequestOpts, req));
  },
  submit_organization: (inputs) => {
    console.log('submit_organization -> inputs:', inputs);
    const postData = {
      // TODO: clean up data so we don't have to do this
      name: inputs.org_name,
      contactInfo: {
        phone: inputs.phone,
        email: inputs.email,
        contactName: inputs.contact_name,
      },
      address: {
        premise: inputs.premise,
        thoroughfare: inputs.thoroughfare,
        locality: inputs.locality,
        administrativeArea: inputs.administrativeArea,
        postalCode: inputs.postalCode,
        country: inputs.country,
      },
      hasMultipleSites: false,
      hasTestingFacilities: inputs.hasTestingFacilities,
    };
    console.log('submit_organization -> postData:', postData);
    const req = {
      url: `${API_HOST}/organizations/`,
      data: JSON.stringify(postData),
      type: 'POST',
      success: (responseData) => {
        console.log('submit_organization -> responseData:', responseData);
        let category, subcategory;
        if (inputs.type.length > 0) {
          category = inputs.type.split('/')[0];
          subcategory = inputs.type.split('/')[1];
        }

        console.log('submit_organization -> submit_site');
        controller.submit_site({
          modal_id: inputs.modal_id,
          button_id: inputs.button_id,
          org_id: responseData.id,
          org_name: inputs.org_name,
          isTesting: inputs.hasTestingFacilities,
          email: inputs.email,
          phone: inputs.phone,
          contact_name: inputs.contact_name,
          category,
          subcategory,
        });
      },
      error: (e) => {
        console.log('Error from "submit_organization":', e);
        console.log('Arguments from "submit_organization":', inputs);
        $(inputs.button_id).removeClass('btn-loading');
        $(inputs.modal_id).find('.alert-warning').removeClass('d-none');
      },
    };
    $.ajax(Object.assign(defaultRequestOpts, req));
  },
  submit_site: (inputs) => {
    console.log('submit_site -> inputs:', inputs);
    const postData = {
      name: inputs.org_name,
      isTesting: inputs.isTesting,
      siteManagerContactInfo: {
        phone: inputs.phone,
        email: inputs.email,
        contactName: inputs.contact_name,
      },
      category: inputs.category,
      subcategory: inputs.subcategory,
    };
    console.log('submit_site -> postData:', postData);
    const req = {
      url: `${API_HOST}/organizations/${inputs.org_id}/sites`,
      data: JSON.stringify(postData),
      type: 'POST',
      success: (responseData) => {
        console.log('submit_site -> responseData:', responseData);
        const emailDomain = inputs.email.split('@')[1];
        const link = `https://${emailDomain}`;

        $(inputs.button_id).removeClass('btn-loading');
        $(inputs.modal_id).find('.alert-warning').addClass('d-none');
        $(inputs.modal_id)
          .find('.alert-success a')
          .attr('href', link)
          .attr('target', '_blank');
        $(inputs.modal_id).find('.alert-success').removeClass('d-none');
        $(inputs.button_id).replaceWith(
          `<a href="${link}", target="_blank", class="btn btn-secondary btn-block">Check your email</a>`,
        );
      },
      error: (e) => {
        console.log('Error from "submit_site":', e);
        console.log('Arguments from "submit_site":', inputs);
        $(inputs.button_id).removeClass('btn-loading');
        $(inputs.modal_id).find('.alert-warning').removeClass('d-none');
      },
    };
    $.ajax(Object.assign(defaultRequestOpts, req));
  },
  scan: (inputs, callback) => {
    const scannedId = inputs.sdvid;
    const deviceId = localStorage.getItem('dvid');
    console.log('scan -> scannedId:', scannedId);
    const postData = {
      scannedId,
      type: 'DEVICE_TO_SCANNABLE',
      location: { lat: 0, long: 0 },
    };
    console.log('scan -> postData:', postData);
    const req = {
      url: `${API_HOST}/devices/${deviceId}/check-ins`,
      data: JSON.stringify(postData),
      type: 'POST',
      success: (responseData) => {
        console.log('scan -> responseData:', responseData);
        $('#scan-notice-loading').addClass('d-none');
        $('#scan-notice-success-datetime').text(new Date());
        $('#scan-notice-id').text(responseData.id);
        $('#scan-notice-success').removeClass('d-none');

        if (callback) {
          console.log('Scan (Callback):', callback);
          callback();
        }
      },
      error: (e) => {
        console.log('Error from "scan":', e);
        $('#scan-notice-loading').addClass('d-none');
        $('#scan-notice-error').removeClass('d-none');

        if (callback) {
          console.log('Scan (Callback):', callback);
          callback();
        }
      },
    };
    $.ajax(Object.assign(defaultRequestOpts, req));
  },
  fetchIP: (data, callback) => {
    console.log('fetchIP -> data:', data);
    const req = {
      url: 'https://api.ipify.org?format=json',
      cache: false,
      contentType: false,
      processData: false,
      type: 'GET',
      success: (ipObj) => {
        console.log('fetchIP -> ipObj:', ipObj);
        if (callback && data) {
          console.log('fetchIP processing callback ->', callback);
          const argsCopy = Object.assign({}, data);
          argsCopy.ip = ipObj.id;
          callback(argsCopy);
        } else {
          return ipObj.ip;
        }
      },
      error: (e) => {
        console.log('Error from "fetchIp":', e);
        console.log('Arguments from "fetchIp":', data, callback);
      },
    };
    $.ajax(req);
  },
  fingerprint: (data, callback) => {
    console.log('fingerprint -> data, callback:', data, callback);
    const fingerprintReport = () => {
      const start = new Date();
      Fingerprint2.get((components) => {
        const murmur = Fingerprint2.x64hash128(
          components.map((pair) => pair.value).join(),
          31,
        );
        const finish = new Date();
        const processingTime = finish.valueOf() - start.valueOf();
        console.log('Fingerprint (Time):', processingTime);
        console.log('Fingerprint (Generated):', murmur);

        if (callback && data) {
          const argsCopy = Object.assign({}, data);
          argsCopy.fingerprint = murmur;
          callback(argsCopy);
        } else {
          return murmur;
        }
      });
    };
    if (window.requestIdleCallback) {
      console.log('Fingerprint: requestIdleCallback');
      window.requestIdleCallback(fingerprintReport);
    } else {
      console.log('Fingerprint: setTimeout');
      setTimeout(fingerprintReport, 500);
    }
  },
  init: () => {
    console.log('Initializing controller');
    if (window.innerWidth >= 750) {
      return;
    }
    $('#mobile-functions').removeClass('d-none');
    $('#desktop-notice').addClass('d-none');
    const deviceId = localStorage.getItem('dvid');
    if (deviceId) {
      console.log('Initializing with Device ID:', deviceId);
      if ($('#qrcode').children().length > 1) {
        console.log('QR already generated');
      }
    } else {
      console.log('Initializing without Device ID');
      $('#mobile-functions').addClass('d-none');
      $('#registration-notice').removeClass('d-none');
      $('#modal-register-notice').modal('show');
      $('body').on('click', '#register-notice-agree', () => {
        $('#register-notice-agree').addClass('btn-loading');
        controller.fetchIP({}, (data) => {
          controller.fingerprint(data, (fingerprintData) => {
            console.log('cancel-route: register -> create:', fingerprintData);
            controller.create(fingerprintData);
          });
        });
      });
    }
  },
}))();

export default controller;
