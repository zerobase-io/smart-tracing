$(() => {
  // - Page Routing ---------------------------//
  

  const routes = [
    { path: '/404',           component: { template: window.puglatizer.views.errors['404']()}},  
    { path: '*',               redirect: '/404' }, 

    //- Static Pages --------------------------------------------------------------//
    { path: '/about',          component: { template: window.puglatizer.pages.about()}},
    { path: '/individual',     component: { template: window.puglatizer.pages.individuals_landing()}},
    { path: '/community',      component: { template: window.puglatizer.pages.community()}},
    { path: '/businesses',     component: { template: window.puglatizer.pages.businesses()}},
    { path: '/healthcare',     component: { template: window.puglatizer.pages.healthcare()}},
    { path: '/community',      component: { template: window.puglatizer.pages.community()}},
    { path: '/notifications',  component: { template: window.puglatizer.pages.notifications()}},
    { path: '/privacy-policy', component: { template: window.puglatizer.pages.privacy()}},
    { path: '/about-aly', component: { template: window.puglatizer.pages.about_us()}},
    { path: '/business-aly', component: { template: window.puglatizer.pages.business_landing()}},
    { path: '/privacy-aly', component: { template: window.puglatizer.pages.privacy_landing()}},
    { path: '/feedback-aly', component: { template: window.puglatizer.pages.feedback()}},
    { path: '/individual-aly', component: { template: window.puglatizer.pages.individuals_landing()}},
    //- special routes-------------------------------------------------------------//
    { path: '/s/*', 
      component: { template: window.puglatizer.pages.home()},
      beforeEnter: (to, from, next) => {
        const sdvid = to.params.pathMatch
        const dvid  = localStorage.getItem('dvid');
        history.replaceState(null, null, '/');

        if(sdvid){
          if(dvid){
            console.log('Has registered ID on scan');
            $('#modal-scan-notice').modal('show');
            // Please note this callback pattern to pass data down the "chain"
            // Unfortunately cannot use Async Await due to coverage issues.
            controller.fetchIP({ sdvid }, data => {
              controller.fingerprint(data, fingerprintData => {
                controller.scan(fingerprintData, () => {
                  next('/')
                });
              });
            });
          } else {
            console.log('Does not have registed ID on scan');
            // patch, since if user hits cancel its never routed to init
            if (window.innerWidth < 750) {$('#desktop-notice').addClass('d-none')}
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
                      next('/')
                    });
                  });
                });
              });
            });
          }
        } else {
          console.log('Invalid Access Point');
          next('/');
        }
      }
    },
    { path: '/', 
      component: {template: window.puglatizer.pages.home()},
      beforeEnter: (to, from, next) => {

        console.log(from);
        console.log('No Conditions Met');
        controller.init();
        next();
      }
    },
    {
      path: '/scan',
      component: {
        template: window.puglatizer.pages.scan(),
        mounted(){
          console.log('scanning');
          window.sound = new Howl({ src: ['/assets/audio/beep.mp3'] });

           const video = document.createElement('video');
           const canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
           const canvas = canvasElement.getContext('2d') as CanvasRenderingContext2D;

          // Use facingMode: environment to attemt to get the front camera on phones
          navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(stream => {
            // @ts-ignore
            video.srcObject = stream;
            video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
            video.play();
            scanStart(video, canvasElement, canvas);
            $('body').on('click', '#nav-main-x', () => {
              stream.getTracks().forEach(track => {
                track.stop();
              });
              scanStop();
              router.push('/')
            });
          });
        }
      }
    }
  ]
  const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  });
  const app = new Vue({
    router
  }).$mount('#app')

 


  // Modals --------------------------------------------------//

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

  // Forms --------------------------------------------------//


  $('body').on('submit','form.register-business', (e)=>{
    e.preventDefault();
    $('#submit-business').addClass('btn-loading');
    const formElements = {};
    $(e.currentTarget).serializeArray().map((entry) => {
      formElements[entry['name']] = entry['value']
    });
    formElements['modal_id'] = '#modal-register-business';
    formElements['button_id'] = '#submit-business';
    formElements['hasTestingFacilities'] = false;
    console.log(formElements);
    controller.submit_organization(formElements);

  });
  $('body').on('submit','form.register-healthcare', (e)=>{
    e.preventDefault();
    $('#submit-business').addClass('btn-loading');
    const formElements = {};
    $(e.currentTarget).serializeArray().map((entry) => {
      formElements[entry['name']] = entry['value']
    });
    formElements['modal_id'] = '#modal-register-healthcare';
    formElements['button_id'] = '#submit-healthcare';
    formElements['hasTestingFacilities'] = formElements['hasTestingFacilities'] =='on' ? true : false;
    console.log(formElements);
    controller.submit_organization(formElements);
  });
  $('body').on('click', '#notify-submit', (e)=>{
    e.preventDefault();
    if($('#notify-agree').prop('checked') === true){
      $('#notify-submit').addClass('btn-loading');
      controller.create_user({'phone': $('#notify-phone').val(), 'button_id':'#notify-submit'})
    }else{
      $('#notify-warning').removeClass('d-none');
    }
  })
  // Navigate to Scan
  // $('body').on('click', '#nav-scan', () => {
  //   // can only initialize sound after user gesture;
  //   // @ts-ignore
  //   window.sound = new Howl({ src: ['/assets/audio/beep.mp3'] });

  //   $('a[href="#page-scan"]').tab('show');
  //   const video = document.createElement('video');
  //   const canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
  //   const canvas = canvasElement.getContext('2d') as CanvasRenderingContext2D;
  //   // Use facingMode: environment to attemt to get the front camera on phones
  //   navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(stream => {
  //     // @ts-ignore

  //     video.srcObject = stream;
  //     video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
  //     video.play();
  //     scanStart();
  //     $('body').on('click', '#nav-main-x', () => {
  //       $('a[href="#page-main"]').tab('show');
  //       stream.getTracks().forEach(track => {
  //         track.stop();
  //       });
  //       scanStop();
  //     });
  //   });
  // });

  // Need to find a way to break this up into YUI pattern -> scanner.ts
  // Video Scanning ---------------------------------------------------------//

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
  function scanStart(video, canvasElement, canvas) {
    //console.log(video);
    if (!requestId) {
      requestId = window.requestAnimationFrame(function(){
        scanLoop(video, canvasElement, canvas);
      });
    }
  }
  function scanLoop(video, canvasElement, canvas) {
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
    scanStart(video, canvasElement, canvas);
  }
});