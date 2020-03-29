import Fingerprint2 from 'fingerprintjs2';

import { API_HOST } from '../runtimeConfig';

console.log({API_HOST})

if (API_HOST == null) {
  throw new Error('API_HOST not in runtime config!');
}

const controller = (() => ({
  create: (
    inputs: { ip?: string; fingerprint?: string } | undefined,
    cb?: (inputs?: { ip?: string; fingerprint?: string }) => void,
  ) => {
    const id = 1;
    const fingerprint = inputs != null ? inputs.fingerprint : undefined;

    const opts: JQuery.AjaxSettings = {
      url: `${API_HOST}/devices/`,
      data: JSON.stringify({
        id,
        fingerprint,
      }),
      cache: false,
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      type: 'POST',
      success: (data: { id: { value: string } }) => {
        console.log('Device ID Created:', data.id.value);
        localStorage.setItem('dvid', String(data.id.value));
        $('#register-notice-agree').removeClass('btn-loading');
        $('#mobile-functions').removeClass('d-none');
        $('#registration-notice').addClass('d-none');

        $('#modal-register-notice').modal('hide');
        //controller.genQR(data.dvid, 'qrcode');
        // TODO is this the best way to trigger a variable redirect?
        if ($('#modal-register-notice').attr('data-redirect') === 'true') {
          $('#modal-register-notice').attr('data-redirect', 'false');
          $('a[href="#page-code"]').tab('show');
        }
        if (cb) {
          cb(inputs);
        }
      },
      error: err => {
        console.log(err);
        // TODO
      },
    };
    jQuery.ajax(opts);
  },
  create_user: (inputs: { button_id?: string; modal_id?: string; phone?: string }) => {
    const dvid = localStorage.getItem('dvid');
    const postData = JSON.stringify({
      contact: {
        phone: inputs.phone,
      },
      deviceId: dvid,
    });
    console.log(postData);
    const opts: JQuery.AjaxSettings = {
      url: `${API_HOST}/users/`,
      data: postData,
      cache: false,
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      type: 'POST',
      success: (data: { id: string }) => {
        console.log('User ID Created:', data.id);
        $('#notify-warning').addClass('d-none');
        $('#notify-success').removeClass('d-none');
        if (inputs.button_id) {
          $(inputs.button_id).removeClass('btn-loading');
          $(inputs.button_id).attr('disabled', 'true');
        }
      },
      error: err => {
        console.log(err);
        $('#notify-warning').removeClass('d-none');
        if (inputs.button_id) {
          $(inputs.button_id).removeClass('btn-loading');
        }
        if (inputs.modal_id) {
          $(inputs.modal_id)
            .find('.alert-warning')
            .removeClass('d-none');
        }

        console.log('warning: create user');
      },
    };
    jQuery.ajax(opts);
  },
  submit_organization: (
    inputs:
      | {
          modal_id?: string;
          button_id?: string;
          org_name?: string;
          email?: string;
          phone?: string;
          contact_name?: string;
          address?: string;
          type?: string;
          hasTestingFacilities?: boolean;
        }
      | undefined,
  ) => {
    const postData = JSON.stringify({
      name: inputs != null ? inputs.org_name : undefined,
      contactInfo: {
        phone: inputs != null ? inputs.phone : undefined,
        email: inputs != null ? inputs.email : undefined,
        contactName: inputs != null ? inputs.contact_name : undefined,
      },
      address: inputs != null ? inputs.address : undefined,
      hasMultipleSites: false,
      hasTestingFacilities: inputs != null ? inputs.hasTestingFacilities : undefined,
    });
    console.log(postData);
    const opts: JQuery.AjaxSettings = {
      url: `${API_HOST}/organizations/`,
      data: postData,
      cache: false,
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      type: 'POST',
      success: (data: { id: string }) => {
        console.log('Org ID Created:', data.id);
        if (inputs != null && inputs.button_id) {
          $(inputs.button_id).removeClass('btn-loading');
          $(inputs.button_id).attr('disabled', 'true');
        }

        if (inputs != null && inputs.modal_id) {
          $(inputs.modal_id)
            .find('.alert-warning')
            .addClass('d-none');
          $(inputs.modal_id)
            .find('.alert-success a')
            .attr('href', 'https://' + inputs.email!.split('@')[1])
            .attr('target', '_blank');
          $(inputs.modal_id)
            .find('.alert-success')
            .removeClass('d-none');
        }
      },
      error: err => {
        console.log(err);
        if (inputs != null && inputs.button_id) {
          $(inputs.button_id).removeClass('btn-loading');
        }

        if (inputs != null && inputs.modal_id) {
          $(inputs.modal_id)
            .find('.alert-warning')
            .removeClass('d-none');
        }

        console.log('WARNING');

        // TODO
      },
    };
    jQuery.ajax(opts);
  },
  scan: (
    inputs: { sdvid?: string; ip?: string; fingerprint?: string } | undefined,
    cb: () => void,
  ) => {
    const dvid = localStorage.getItem('dvid');

    const postData = JSON.stringify({
      scannedId: inputs != null ? inputs.sdvid : undefined,
      type: 'DEVICE_TO_DEVICE',
      // fingerprint: inputs != null ? inputs.fingerprint : undefined,
    });

    const opts: JQuery.AjaxSettings = {
      url: `${API_HOST}/devices/${dvid}/check-ins`,
      data: postData,
      cache: false,
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      type: 'POST',
      success: (data: { id: string }) => {
        console.log('Scan (Success):', data);

        $('#scan-notice-loading').addClass('d-none');
        // @ts-ignore
        $('#scan-notice-success-datetime').text(new Date());
        // @ts-ignore
        JsBarcode('#scan-notice-barcode-id', data.id.value);
        $('#scan-notice-success').removeClass('d-none');

        console.log('Scan (Callback):', cb);
        console.log('Scan (Data):', inputs);
        // scan only routes to init for now, so no data pass through required.
        if (cb) {
          cb();
        }
      },
      error: err => {
        console.log(err);
        console.log('Scan: Error');
        $('#scan-notice-loading').addClass('d-none');
        $('#scan-notice-error').removeClass('d-none');

        console.log('Scan Error (Callback):', cb);
        if (cb) {
          cb();
        }
      },
    };
    jQuery.ajax(opts);
  },
  fetchIP: (
    data: { ip?: string; sdvid?: string },
    cb: (data: { ip?: string; sdvid?: string }) => void,
  ) => {
    const retData = data;

    const opts: JQuery.AjaxSettings = {
      url: 'https://api.ipify.org?format=json',
      cache: false,
      contentType: false,
      processData: false,
      type: 'GET',
      success: (ipObj: { ip: string }) => {
        console.log('IP (Success):', ipObj);
        console.log('IP (Callback):', cb);
        console.log('IP (Data):', ipObj);
        if (cb && retData) {
          retData.ip = ipObj.ip;
          cb(retData);
        } else {
          return ipObj.ip;
        }
      },
      error: err => {
        console.log(err);
        if (cb && retData) {
          cb(data);
        } else {
          return err;
        }
      },
    };
    jQuery.ajax(opts);
  },
  fingerprint: (
    data: {
      ip?: string;
      sdvid?: string;
    } & {
      fingerprint?: string;
    },
    cb: (
      data: {
        ip?: string;
        sdvid?: string;
      } & {
        fingerprint?: string;
      },
    ) => void,
  ) => {
    const retData = data;

    const fingerprintReport = () => {
      const d1 = new Date();
      Fingerprint2.get(components => {
        const murmur = Fingerprint2.x64hash128(components.map(pair => pair.value).join(), 31);
        const d2 = new Date();
        const time = d2.valueOf() - d1.valueOf();
        console.log('Fingerprint (Time):', time);
        console.log('Fingerprint (Generated):', murmur);

        // if > 1 that means already passed through IP and taken on data
        if (cb && retData) {
          console.log('Fingerprint >1 (Callback):', cb);
          console.log('Fingerprint >1 (Data):', data);
          retData.fingerprint = murmur;
          cb(retData);
        } else {
          return murmur;
        }
      });
    };

    // see usage note in the README
    if (window.requestIdleCallback) {
      console.log('Fingerprint: requestIdleCallback');
      window.requestIdleCallback(fingerprintReport);
    } else {
      console.log('Fingerprint: setTimeout');
      setTimeout(fingerprintReport, 500);
    }
  },
  init: () => {
    console.log('Initialized');

    if (window.innerWidth < 750) {
      console.log(window.innerWidth);
      $('#mobile-functions').removeClass('d-none');
      $('#desktop-notice').addClass('d-none');
      const dvid = localStorage.getItem('dvid');
      const dvidC = localStorage.getItem('dvid_alt')
        ? JSON.parse(localStorage.getItem('dvid_alt')!).length
        : 0;

      if (!dvid) {
        console.log('no registered dvid');

        $('#mobile-functions').addClass('d-none');
        $('#registration-notice').removeClass('d-none');
        $('#modal-register-notice').modal('show');

        $('body').on('click', '#register-notice-agree', () => {
          $('#register-notice-agree').addClass('btn-loading');
          controller.fetchIP({}, data => {
            controller.fingerprint(data, fingerprintData => {
              console.log('cancel-route: register -> create:', fingerprintData);
              controller.create(fingerprintData);
            });
          });
        });
      } else {
        console.log('Initialized with Device ID.');

        // sometimes this might fire twice, so we need something to catch
        if ($('#qrcode').children().length > 1) {
          console.log('QR already generated');
        } else {
          //controller.genQR(dvid, 'qrcode');
        }
        if (dvidC > 0) {
          console.log('alts available:', dvidC);
          // controller.displayAlt();
          $('#alternative-code-card').removeClass('d-none');
          $('#notice-alt-code').addClass('d-none');
        }
      }
    }
  },
}))();

export default controller;
