import React from 'react';
import $ from 'jquery';
import IMask from 'imask';
import jsQR from 'jsqr';
import { Howl } from 'howler';

import controller from '../api/controller';

import Main from './Main';

// import '../../public/styles.min.css';
// import 'tabler-react/dist/Tabler.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import '../assets/css/tabler.min-1582732176.css';
import '../assets/css/tabler-buttons.min-1582732176.css';
import '../assets/css/icons.css';
import '../styles/overrides.css';
import '../assets/js/tabler.min-1582732176.js';

class App extends React.Component {
  componentDidMount = () => {
    $(() => {
      // - Additional Functionality---------------------------//

      // -controller.fetchNews();

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
          controller.fetchIP({ sdvid }, data => {
            controller.fingerprint(data, fingerprintData => {
              controller.scan(fingerprintData, () => {
                controller.init();
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

            controller.fetchIP({ sdvid }, data => {
              console.log('IP -> fingerprint:', data);
              controller.fingerprint(data, fingerprintData => {
                console.log('fingerprint -> create :', fingerprintData);
                controller.create(fingerprintData, createData => {
                  console.log('create -> scan: ', createData);
                  controller.scan(createData, () => {
                    controller.init();
                  });
                });
              });
            });
          });
        }
      } else if (action === 's') {
        console.log('Invalid Access Point');
        window.history.replaceState({}, 'Home', '/');
        controller.init();
      } else {
        console.log('No Conditions Met');
        controller.init();
      }

      //  View / Naviation Controllers ------------------------------------------------------ //
      $('body').on('click', "a[data-toggle='view']", e => {
        e.preventDefault();
        window.scrollTo(0, 0);
        $('a[href="' + $(e.currentTarget).attr('href') + '"]').tab('show');
      });
      $('body').on('click', '#landing-about', () => {
        console.log('hello');
        $('a[href="#tabs-about"]').tab('show');
      });
      $('body').on('click', '#register-healthcare', () => {
        $('#modal-register-healthcare').modal('show');
      });
      $('body').on('click', '#register-business', () => {
        $('#modal-register-business').modal('show');
      });
      $('body').on('click', '#privacy-policy', () => {
        console.log('show policy');
        $('#modal-privacy-policy').modal('show');
      });
      $('body').on('click', '#show-registration', () => {
        $('#modal-register-notice').modal('show');
      });
      // Navigate to Main
      $('body').on('click', '#nav-main', () => {
        $('a[href="#page-main"]').tab('show');
        $('.notice-code').addClass('active');
        $('.notice-code .dimmer-notice').show();
      });
      $('body').on('submit', 'form.register-business', e => {
        e.preventDefault();
        $('#submit-business').addClass('btn-loading');
        const formElements: { [key: string]: string | boolean } = {};
        $(e.currentTarget)
          .serializeArray()
          .map(entry => {
            formElements[entry['name']] = entry['value'];
          });
        formElements['modal_id'] = '#modal-register-business';
        formElements['button_id'] = '#submit-business';
        formElements['hasTestingFacilities'] = false;
        console.log(formElements);
        controller.submit_organization(formElements);
      });
      $('body').on('submit', 'form.register-healthcare', e => {
        e.preventDefault();
        $('#submit-business').addClass('btn-loading');
        const formElements: { [key: string]: string | boolean } = {};
        $(e.currentTarget)
          .serializeArray()
          .map(entry => {
            formElements[entry['name']] = entry['value'];
          });
        formElements['modal_id'] = '#modal-register-healthcare';
        formElements['button_id'] = '#submit-healthcare';
        formElements['hasTestingFacilities'] =
          formElements['hasTestingFacilities'] == 'on' ? true : false;
        console.log(formElements);
        controller.submit_organization(formElements);
      });
      $('body').on('click', '#notify-submit', e => {
        e.preventDefault();
        if ($('#notify-agree').prop('checked') === true) {
          $('#notify-submit').addClass('btn-loading');
          controller.create_user({
            phone: $('#notify-phone').val() as string,
            button_id: '#notify-submit',
          });
        } else {
          $('#notify-warning').removeClass('d-none');
        }
      });

      // Navigate to Scan
      $('body').on('click', '#nav-scan', () => {
        // can only initialize sound after user gesture;
        const sound = new Howl({ src: ['/assets/audio/beep.mp3'] });

        // @ts-ignore
        window.sound = sound;

        $('a[href="#page-scan"]').tab('show');
        // Use facingMode: environment to attemt to get the front camera on phones
        navigator.mediaDevices
          .getUserMedia({ video: { facingMode: 'environment' } })
          .then(stream => {
            video.srcObject = stream;
            video.setAttribute('playsinline', 'true'); // required to tell iOS safari we don't want fullscreen
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
  };

  render() {
    return <Main />;
  }
}

export default App;
