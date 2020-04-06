function getRuntimeConfig(): RuntimeConfig {

  const runtimeConfigEl = document.getElementById('runtime-config');
  if (runtimeConfigEl == null) {
    return {};
  }
  return JSON.parse(runtimeConfigEl.innerHTML);
}

const runtimeConfig = getRuntimeConfig();

const { ENV, API_HOST } = runtimeConfig;

// Remove Console Log for non-dev environment
console.log = ENV === 'dev' ? console.log : () => {};

console.log('runtime config: ', runtimeConfig);

if (API_HOST == null) {
  throw new Error('API_HOST not in runtime config!');
}

const controller = (() => ({
  // genQR: (dvid: string, elementId: string) => {
  //   const generatedQr = new QRCode(document.getElementById(elementId)!, {
  //     text: `${API_HOST}/s/${dvid}`,
  //     width: 300,
  //     height: 300,
  //     colorDark: '#000000',
  //     colorLight: '#ffffff',
  //     correctLevel: QRCode.CorrectLevel.H,
  //   });

  //   return generatedQr;
  // },
  create: (
    inputs: { ip?: string; fingerprint?: string } | undefined,
    cb?: (inputs?: { ip?: string; fingerprint?: string }) => void,
  ) => {
    const uniqD = Date.now();

    const id = 1;
    const ip = inputs != null ? inputs.ip : undefined;
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
      success: (data: { id: string }) => {
        console.log(data);
        console.log('Device ID Created:', data.id);
        localStorage.setItem('dvid', data.id);
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
  create_user : (
    inputs: {button_id?:string; phone?:string;}
  ) => {
    const dvid = localStorage.getItem('dvid');
    const postData = JSON.stringify({
      name: '';
      contact: {
        "phone": inputs.phone,
        "email": ''
      },
      deviceId: dvid
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
        $(inputs.button_id).removeClass('btn-loading');
        $(inputs.button_id).replaceWith('<a class="btn btn-secondary btn-block mt-0" href="/" style="border-radius: 0px 0px 3px 3px;">Continue to Zerobase</a>');
        
      },
      error: err => {
        console.log(err);
        $('#notify-warning').removeClass('d-none');
        $(inputs.button_id).removeClass('btn-loading');
        $(inputs.modal_id).find('.alert-warning').removeClass('d-none');
        console.log('warning: create user');
      },
    };
    jQuery.ajax(opts);
  },
  submit_organization: (
    inputs: { 
      modal_id?:     string; 
      button_id?:    string; 

      org_name?:     string; 
      email?:        string; 
      phone?:        string; 
      contact_name?: string; 

      // Address
      premise?:            string;
      thoroughfare?:       string;
      locality?:           string;
      administrativeArea?: string;
      postalCode?:         string;
      country?:            string;

      type?:  string; 
      hasTestingFacilities?: boolean; 

    } | undefined,
  ) => {

    const postData = JSON.stringify({
      name: inputs != null ? inputs.org_name : undefined,
      contactInfo: {
        phone:       inputs != null ? inputs.phone : undefined,
        email:       inputs != null ? inputs.email : undefined,
        contactName: inputs != null ? inputs.contact_name : undefined
      },
      address: {
        premise:            inputs != null ? inputs.premise            : undefined,
        thoroughfare:       inputs != null ? inputs.thoroughfare       : undefined,
        locality:           inputs != null ? inputs.locality           : undefined,
        administrativeArea: inputs != null ? inputs.administrativeArea : undefined,
        postalCode:         inputs != null ? inputs.postalCode         : undefined,
        country:            inputs != null ? inputs.country            : undefined
      },
      hasMultipleSites: false,
      hasTestingFacilities: inputs != null ? inputs.hasTestingFacilities : undefined
    });

    console.log('Org Submission Object:', postData);
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
        console.log(
          inputs.modal_id, 
          inputs.button_id, 
          data.id, 
          inputs.org_name, 
          inputs.hasTestingFacilities, 
          inputs.email, 
          inputs.phone, 
          inputs.contact_name, 
          inputs.type
        );

        var category, subcategory;
        if(inputs.type.length > 0){
          category =    inputs.type.split('/')[0]
          subcategory = inputs.type.split('/')[1]
        } else {
          category = null;
          subcategory= null;
        }
        controller.submit_site({
          modal_id:     inputs.modal_id,
          button_id:    inputs.button_id,
          org_id:       data.id,
          org_name:     inputs.org_name,
          isTesting:    inputs.hasTestingFacilities,
          email:        inputs.email,
          phone:        inputs.phone,
          contact_name: inputs.contact_name,
          category:     category,
          subcategory:  subcategory
        });
      },
      error: err => {
        console.log(err);
        $(inputs.button_id).removeClass('btn-loading');
        $(inputs.modal_id).find('.alert-warning').removeClass('d-none');
      },
    };
    jQuery.ajax(opts);
  },
  submit_site: (
    inputs: { 
      modal_id?:     string; 
      button_id?:    string; 
      org_id?:       string;

      org_name?:     string;

      isTesting?:    boolean; 

      email?:        string; 
      phone?:        string; 
      contact_name?: string; 

      category?:     string; 
      subcategory?:  string;

    } | undefined,
  ) => {
    const postData = JSON.stringify({
      name:          inputs != null ? inputs.org_name :     undefined,
      isTesting:     inputs != null ? inputs.isTesting :    undefined,
      siteManagerContactInfo: {
        phone:       inputs != null ? inputs.phone :        undefined,
        email:       inputs != null ? inputs.email :        undefined,
        contactName: inputs != null ? inputs.contact_name : undefined
      },
      category:      inputs != null ? inputs.category :     undefined,
      subcategory:   inputs != null ? inputs.subcategory :  undefined,
      //-subcategory:   inputs != null ? inputs.subcategory :  undefined
    });
    console.log('Site Submission Object:', postData);

    const opts: JQuery.AjaxSettings = {
      url: `${API_HOST}/organizations/`+inputs.org_id+'/sites',
      data: postData,
      cache: false,
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      type: 'POST',
      success: (data: { id: string }) => {

        console.log('Site ID Created:', data.id);
        var emailDomain = inputs.email.split('@')[1]
        $(inputs.button_id).removeClass('btn-loading');
        $(inputs.modal_id).find('.alert-warning').addClass('d-none');
        $(inputs.modal_id).find('.alert-success a').attr('href', 'https://'+emailDomain).attr("target","_blank");
        $(inputs.modal_id).find('.alert-success').removeClass('d-none');
        $(inputs.button_id).replaceWith('<a href="https://'+emailDomain+'", target="_blank", class="btn btn-secondary btn-block">Check your email</a>');
        
      },
      error: err => {
        console.log(err);
        $(inputs.button_id).removeClass('btn-loading');
        $(inputs.modal_id).find('.alert-warning').removeClass('d-none');

      },
    };
    jQuery.ajax(opts);
  },

  // createAlt: (inputs: { ip?: string; fingerprint?: string } | undefined) => {
  //   const dvid = localStorage.getItem('dvid');

  //   const postData = JSON.stringify({
  //     dvid,
  //     dvid_c: localStorage.getItem('dvid_alt')
  //       ? JSON.parse(localStorage.getItem('dvid_alt')!).length
  //       : 0,
  //     ip: inputs != null ? inputs.ip : undefined,
  //     fingerprint: inputs != null ? inputs.fingerprint : undefined,
  //   });

  //   const opts: JQuery.AjaxSettings = {
  //     url: `${API_HOST}/ca/${dvid}`,
  //     data: postData,
  //     cache: false,
  //     dataType: 'json',
  //     contentType: 'application/json',
  //     processData: false,
  //     type: 'POST',
  //     success: (data: { success: boolean; dvid: string }) => {
  //       if (data.success === true) {
  //         console.log(data.dvid);
  //         const dvidAlts = localStorage.getItem('dvid_alt')
  //           ? JSON.parse(localStorage.getItem('dvid_alt')!)
  //           : [];
  //         dvidAlts.push(data.dvid);
  //         localStorage.setItem('dvid_alt', JSON.stringify(dvidAlts));
  //         console.log(JSON.parse(localStorage.getItem('dvid_alt')!));
  //         const newLength = JSON.parse(localStorage.getItem('dvid_alt')!).length;
  //         const template = $('#template-code-alt').clone();
  //         template.find('.title-code-alt').text(`Alternative Code ${newLength}`);
  //         template.attr('data-id', data.dvid);
  //         template.removeAttr('id');
  //         template.removeClass('d-none');
  //         $('#alternative-code-group').append(template);
  //         $('#notice-alt-code').addClass('d-none');
  //         $('#generate-alt-code').removeClass('btn-loading-dark');
  //       } else {
  //         // exceeded limit
  //         console.log('exceeded limit');
  //         $('#generate-alt-code').removeClass('btn-loading-dark');
  //       }
  //     },
  //     error: err => {
  //       $('#generate-alt-code').removeClass('btn-loading-dark');
  //       console.log(err);
  //     },
  //   };

  //   if (dvid) {
  //     jQuery.ajax(opts);
  //   } else {
  //     $('#generate-alt-code').removeClass('btn-loading-dark');
  //     console.log('Cannot create Alt without Parent');
  //   }
  // },
  // displayAlt: () => {
  //   JSON.parse(localStorage.getItem('dvid_alt')!).forEach((alt: string, index: number) => {
  //     const template = $('#template-code-alt').clone();
  //     template.find('.title-code-alt').text(`Alternative Code ${index + 1}`);
  //     template.attr('data-id', alt);
  //     template.removeAttr('id');
  //     template.removeClass('d-none');
  //     $('#alternative-code-group').append(template);
  //   });
  // },
  scan: (
    inputs: { sdvid?: string; ip?: string; fingerprint?: string } | undefined,
    cb: () => void,
  ) => {
    const dvid = localStorage.getItem('dvid');
    const postData = JSON.stringify({
      scannedId: inputs != null ? inputs.sdvid : undefined,
      type: 'DEVICE_TO_SCANNABLE',
      location: {
        lat: 0,
        long: 0
      }
      // fingerprint: inputs != null ? inputs.fingerprint : undefined,
    });
    console.log('Scanning with: '+dvid);
    console.log(postData);
    const opts: JQuery.AjaxSettings = {
      url: `${API_HOST}/devices/`+dvid+`/check-ins`,
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
        // else if (data.success === false) {
        //   if (data.name === 'ValidationError') {
        //     console.log('Scan (Validation Error):', data);
        //     $('#scan-notice-loading').addClass('d-none');
        //     $('#scan-notice-error-title').text('ID Error');
        //     $('#scan-notice-error-code').text('Not a Zerobase ID');
        //     $('#scan-notice-error-message').text(
        //       'The ID you scanned is not a zerobase ID. Please inform the party that their ID is either damaged or not registered. We have registered this error.',
        //     );
        //     $('#scan-notice-error').removeClass('d-none');
        //   } else {
        //     console.log('Scan (Other Error):', data);
        //     $('#scan-notice-loading').addClass('d-none');
        //     $('#scan-notice-error').removeClass('d-none');
        //   }
        // }
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
  // fetchNews: () => {
  //   const opts: JQuery.AjaxSettings = {
  //     url:
  //       'https://newsapi.org/v2/top-headlines?q=coronavirus&country=de&apiKey=84ca05784bfb4228b4dc2396fd09d950',
  //     cache: false,
  //     contentType: false,
  //     processData: false,
  //     type: 'GET',
  //     success: (data: {
  //       status: string;
  //       articles: {
  //         url: string;
  //         source: { name: string };
  //         title: string;
  //         publishedAt: string;
  //         urlToImage: string;
  //       }[];
  //     }) => {
  //       if (data.status === 'ok' && data.articles) {
  //         console.log('Fetched News:');
  //         console.log(data);
  //         data.articles.forEach(article => {
  //           const template = $('#template-news').clone();
  //           template.find('.news-href').attr('href', article.url);
  //           template.find('.news-source').text(article.source.name);
  //           template.find('.news-title').text(article.title);
  //           template.find('.news-published').text(article.publishedAt);
  //           template.find('.news-image').css('background-image', `url(${article.urlToImage})`);
  //           template.removeAttr('id');
  //           template.removeClass('d-none');
  //           $('#news-feed-container').append(template);
  //         });
  //       }
  //     },
  //     error: err => {
  //       console.log(err);
  //     },
  //   };
  //   jQuery.ajax(opts);
  // },
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
          controller.displayAlt();
          $('#alternative-code-card').removeClass('d-none');
          $('#notice-alt-code').addClass('d-none');
        }
      }
    }
  },
}))();
