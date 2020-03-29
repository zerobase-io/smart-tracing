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

const router = (() => ({
  genQR: (dvid: string, elementId: string) => {
    const generatedQr = new QRCode(document.getElementById(elementId)!, {
      text: `${API_HOST}/s/${dvid}`,
      width: 300,
      height: 300,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H,
    });

    return generatedQr;
  },
  create: (
    inputs: { ip?: string; fingerprint?: string } | undefined,
    cb?: (inputs?: { ip?: string; fingerprint?: string }) => void,
  ) => {
    const uniqD = Date.now();

    const ip = inputs != null ? inputs.ip : undefined;
    const fingerprint = inputs != null ? inputs.fingerprint : undefined;

    const opts: JQuery.AjaxSettings = {
      url: `${API_HOST}/c/${uniqD}`,
      data: JSON.stringify({
        ip,
        fingerprint,
      }),
      cache: false,
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      type: 'POST',
      success: (data: { dvid: string }) => {
        console.log('Device ID Created:', data.dvid);
        localStorage.setItem('dvid', String(data.dvid));
        $('#register-notice-agree').removeClass('btn-loading');
        $('#mobile-functions').removeClass('d-none');
        $('#registration-notice').addClass('d-none');

        $('#modal-register-notice').modal('hide');
        router.genQR(data.dvid, 'qrcode');
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
  createAlt: (inputs: { ip?: string; fingerprint?: string } | undefined) => {
    const dvid = localStorage.getItem('dvid');

    const postData = JSON.stringify({
      dvid,
      dvid_c: localStorage.getItem('dvid_alt')
        ? JSON.parse(localStorage.getItem('dvid_alt')!).length
        : 0,
      ip: inputs != null ? inputs.ip : undefined,
      fingerprint: inputs != null ? inputs.fingerprint : undefined,
    });

    const opts: JQuery.AjaxSettings = {
      url: `${API_HOST}/ca/${dvid}`,
      data: postData,
      cache: false,
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      type: 'POST',
      success: (data: { success: boolean; dvid: string }) => {
        if (data.success === true) {
          console.log(data.dvid);
          const dvidAlts = localStorage.getItem('dvid_alt')
            ? JSON.parse(localStorage.getItem('dvid_alt')!)
            : [];
          dvidAlts.push(data.dvid);
          localStorage.setItem('dvid_alt', JSON.stringify(dvidAlts));
          console.log(JSON.parse(localStorage.getItem('dvid_alt')!));
          const newLength = JSON.parse(localStorage.getItem('dvid_alt')!).length;
          const template = $('#template-code-alt').clone();
          template.find('.title-code-alt').text(`Alternative Code ${newLength}`);
          template.attr('data-id', data.dvid);
          template.removeAttr('id');
          template.removeClass('d-none');
          $('#alternative-code-group').append(template);
          $('#notice-alt-code').addClass('d-none');
          $('#generate-alt-code').removeClass('btn-loading-dark');
        } else {
          // exceeded limit
          console.log('exceeded limit');
          $('#generate-alt-code').removeClass('btn-loading-dark');
        }
      },
      error: err => {
        $('#generate-alt-code').removeClass('btn-loading-dark');
        console.log(err);
      },
    };

    if (dvid) {
      jQuery.ajax(opts);
    } else {
      $('#generate-alt-code').removeClass('btn-loading-dark');
      console.log('Cannot create Alt without Parent');
    }
  },
  displayAlt: () => {
    JSON.parse(localStorage.getItem('dvid_alt')!).forEach((alt: string, index: number) => {
      const template = $('#template-code-alt').clone();
      template.find('.title-code-alt').text(`Alternative Code ${index + 1}`);
      template.attr('data-id', alt);
      template.removeAttr('id');
      template.removeClass('d-none');
      $('#alternative-code-group').append(template);
    });
  },
  scan: (
    inputs: { sdvid?: string; ip?: string; fingerprint?: string } | undefined,
    cb: () => void,
  ) => {
    const dvid = localStorage.getItem('dvid');

    const postData = JSON.stringify({
      dvid: 1,
      sdvid: inputs != null ? inputs.sdvid : undefined,
      ip: inputs != null ? inputs.ip : undefined,
      fingerprint: inputs != null ? inputs.fingerprint : undefined,
    });

    const opts: JQuery.AjaxSettings = {
      url: `${API_HOST}/s-id/${dvid}`,
      data: postData,
      cache: false,
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      type: 'POST',
      success: (data: { success: boolean; name: string }) => {
        if (data.success === true) {
          console.log('Scan (Success):', data);
          $('#scan-notice-loading').addClass('d-none');
          // @ts-ignore
          $('#scan-notice-success-datetime').text(new Date());
          // @ts-ignore
          JsBarcode('#scan-notice-barcode-id', data.scan);
          $('#scan-notice-success').removeClass('d-none');
        } else if (data.success === false) {
          if (data.name === 'ValidationError') {
            console.log('Scan (Validation Error):', data);
            $('#scan-notice-loading').addClass('d-none');
            $('#scan-notice-error-title').text('ID Error');
            $('#scan-notice-error-code').text('Not a Zerobase ID');
            $('#scan-notice-error-message').text(
              'The ID you scanned is not a zerobase ID. Please inform the party that their ID is either damaged or not registered. We have registered this error.',
            );
            $('#scan-notice-error').removeClass('d-none');
          } else {
            console.log('Scan (Other Error):', data);
            $('#scan-notice-loading').addClass('d-none');
            $('#scan-notice-error').removeClass('d-none');
          }
        }
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
  fetchNews: () => {
    const opts: JQuery.AjaxSettings = {
      url:
        'https://newsapi.org/v2/top-headlines?q=coronavirus&country=de&apiKey=84ca05784bfb4228b4dc2396fd09d950',
      cache: false,
      contentType: false,
      processData: false,
      type: 'GET',
      success: (data: {
        status: string;
        articles: {
          url: string;
          source: { name: string };
          title: string;
          publishedAt: string;
          urlToImage: string;
        }[];
      }) => {
        if (data.status === 'ok' && data.articles) {
          console.log('Fetched News:');
          console.log(data);
          data.articles.forEach(article => {
            const template = $('#template-news').clone();
            template.find('.news-href').attr('href', article.url);
            template.find('.news-source').text(article.source.name);
            template.find('.news-title').text(article.title);
            template.find('.news-published').text(article.publishedAt);
            template.find('.news-image').css('background-image', `url(${article.urlToImage})`);
            template.removeAttr('id');
            template.removeClass('d-none');
            $('#news-feed-container').append(template);
          });
        }
      },
      error: err => {
        console.log(err);
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
          router.fetchIP({}, data => {
            router.fingerprint(data, fingerprintData => {
              console.log('cancel-route: register -> create:', fingerprintData);
              router.create(fingerprintData);
            });
          });
        });
      } else {
        console.log('Initialized with Device ID.');

        // sometimes this might fire twice, so we need something to catch
        if ($('#qrcode').children().length > 1) {
          console.log('QR already generated');
        } else {
          router.genQR(dvid, 'qrcode');
        }
        if (dvidC > 0) {
          console.log('alts available:', dvidC);
          router.displayAlt();
          $('#alternative-code-card').removeClass('d-none');
          $('#notice-alt-code').addClass('d-none');
        }
      }
    }
  },
}))();

$(() => {
  // - Additional Functionality---------------------------//

  // -router.fetchNews();

  // https://github.com/kenwheeler/slick/issues/187
  ($('.info-slider') as any).slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });

  // Input Mask
  const maskElementList: {
    dataset: { mask: any; 'mask-visible': string };
  }[] = [].slice.call(document.querySelectorAll('[data-mask]'));
  maskElementList.map(maskEl => {
    console.log('maskEl', maskEl);

    // @ts-ignore
    return IMask(maskEl, {
      mask: maskEl.dataset.mask,
      lazy: maskEl.dataset['mask-visible'] === 'true',
    });
  });

  // - Simple Routing ---------------------------//

  const scanParser = document.createElement('a');
  scanParser.href = window.location.href;
  const { pathname } = scanParser;
  const action = pathname.split('/')[1];
  const sdvid = pathname.split('/')[2];
  const dvid = localStorage.getItem('dvid');

  if (action === 's' && sdvid) {
    console.log('Scan Access Point');
    window.history.replaceState({}, 'Home', '/');
    if (dvid) {
      console.log('Has registered ID on scan');
      $('#modal-scan-notice').modal('show');
      // Please note this callback pattern to pass data down the "chain"
      // Unfortunately cannot use Async Await due to coverage issues.
      router.fetchIP({ sdvid }, data => {
        router.fingerprint(data, fingerprintData => {
          router.scan(fingerprintData, () => {
            router.init();
          });
        });
      });
    } else {
      console.log('Does not have registed ID on scan');

      // patch, since if user hits cancel its never routed to init
      if (window.innerWidth < 750) {
        $('#desktop-notice').addClass('d-none');
      }

      $('#mobile-functions').addClass('d-none');
      $('#registration-notice').removeClass('d-none');
      $('#modal-register-notice').modal('show');

      $('body').on('click', '#register-notice-agree', () => {
        $('#register-notice-agree').addClass('btn-loading');
        $('#modal-scan-notice').modal('show');

        router.fetchIP({ sdvid }, data => {
          console.log('IP -> fingerprint:', data);
          router.fingerprint(data, fingerprintData => {
            console.log('fingerprint -> create :', fingerprintData);
            router.create(fingerprintData, createData => {
              console.log('create -> scan: ', createData);
              router.scan(createData, () => {
                router.init();
              });
            });
          });
        });
      });
    }
  } else if (action === 's') {
    console.log('Invalid Access Point');
    window.history.replaceState({}, 'Home', '/');
    router.init();
  } else {
    console.log('No Conditions Met');
    router.init();
  }

  //  View / Naviation Controllers ------------------------------------------------------ //
  $('body').on('click', "a[data-toggle='view']", (e)=>{
    e.preventDefault();
    window.scrollTo(0,0);
    $('a[href="'+$(e.currentTarget).attr('href')+'"]').tab('show');
  });
  $('body').on('click', '#landing-about', () => {
    console.log('hello');
    $('a[href="#tabs-about"]').tab('show');
  });
  $('body').on('click', '#landing-generate', () => {
    if (localStorage.getItem('dvid') == null) {
      $('#modal-register-notice').attr('data-redirect', 'true');
      $('#modal-register-notice').modal('show');
    } else {
      $('a[href="#page-code"]').tab('show');
    }
  });

  $('body').on('click', '#show-registration', () => {
    $('#modal-register-notice').modal('show');
  });
  // Navigate to Code
  $('body').on('click', '#nav-code', () => {
    $('a[href="#page-code"]').tab('show');
    // for when navigating from alt code to main code
    $('.notice-code').addClass('active');
    $('.notice-code .dimmer-notice').show();
  });
  // Navigate to Main
  $('body').on('click', '#nav-main', () => {
    $('a[href="#page-main"]').tab('show');
    $('.notice-code').addClass('active');
    $('.notice-code .dimmer-notice').show();
  });
  // Reveal Code
  $('body').on('click', '#reveal-code', () => {
    console.log('Reveal');
    $('.notice-code').removeClass('active');
    $('.notice-code .dimmer-notice').hide();
  });
  // Reveal Alt Code
  $('body').on('click', '.reveal-code-alt', () => {
    // for resetting canvas
    $('#qrcode-alt').empty();
    $('#qrcode-alt').append('<img class="qr-logo-overlay" src="/assets/img/qr_logo.png">');
    // for when revealing main code, but navigating to alt code
    $('.notice-code').addClass('active');
    $('.notice-code .dimmer-notice').show();
    // check if alt code exists, if not throw error
    if ($().attr('data-id')) {
      router.genQR($().attr('data-id')!, 'qrcode-alt');
      $('#title-code-alt').text(
        $()
          .find('.title-code-alt')
          .text(),
      );
      $('a[href="#page-code-alt"]').tab('show');
    } else {
      console.log('error displaying alt');
    }
  });
  // Generating Alt Code
  $('body').on('click', '#generate-alt-code', () => {
    $('#generate-alt-code').addClass('btn-loading-dark');

    router.fetchIP({}, data => {
      router.fingerprint(data, fingerprintData => {
        router.createAlt(fingerprintData);
      });
    });
  });
  // Navigate to Scan
  $('body').on('click', '#nav-scan', () => {
    // can only initialize sound after user gesture;
    // @ts-ignore
    window.sound = new Howl({ src: ['/assets/audio/beep.mp3'] });

    $('a[href="#page-scan"]').tab('show');
    // Use facingMode: environment to attemt to get the front camera on phones
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(stream => {
      // @ts-ignore
      video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
      video.play();
      scanStart();
      $('body').on('click', '#nav-main-x', () => {
        $('a[href="#page-main"]').tab('show');
        stream.getTracks().forEach(track => {
          track.stop();
        });
        scanStop();
      });
    });
  });

  // Video Scanning ---------------------------------------------------------//
  const video = document.createElement('video');
  const canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
  const canvas = canvasElement.getContext('2d') as CanvasRenderingContext2D;
  function drawLine(begin: Point, end: Point, color: string) {
    canvas.beginPath();
    canvas.moveTo(begin.x, begin.y);
    canvas.lineTo(end.x, end.y);
    canvas.lineWidth = 4;
    canvas.strokeStyle = color;
    canvas.stroke();
  }
  let requestId: number | undefined;
  function scanStop() {
    if (requestId) {
      window.cancelAnimationFrame(requestId);
      requestId = undefined;
    }
  }
  function scanStart() {
    if (!requestId) {
      requestId = window.requestAnimationFrame(scanLoop);
    }
  }
  function scanLoop() {
    requestId = undefined;
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvasElement.hidden = false;
      canvasElement.height = video.videoHeight;
      canvasElement.width = video.videoWidth;

      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);

      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });
      if (code) {
        drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#1AAD19');
        drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#1AAD19');
        drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#1AAD19');
        drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#1AAD19');

        const parser = document.createElement('a');
        parser.href = code.data;
        const { pathname: actionPath } = parser;
        const codeAction = actionPath.split('/')[1];
        const codeSdvid = actionPath.split('/')[2];

        if (codeAction === 's' && codeSdvid) {
          // @ts-ignore
          sound.play();
          window.location.replace(code.data);
          return;
        }
      }
    }

    scanStart();
  }
});
