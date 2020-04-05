$(() => {
  // - Page Routing ---------------------------//
  

  const routes = [
    { path: '/404',           component: { template: window.puglatizer.views.errors['404']()}},  
    { path: '*',               redirect: '/404' }, 

    //- Static Pages --------------------------------------------------------------//
    { path: '/about',          component: { template: window.puglatizer.pages.about_us()}},
    { path: '/individual',     component: { template: window.puglatizer.pages.individuals_landing()}},
    { path: '/community',      component: { template: window.puglatizer.pages.community()}},
    { path: '/businesses',     component: { template: window.puglatizer.pages.business_landing()}},
    { path: '/testing',        component: { template: window.puglatizer.pages.testingsite_landing()}},
    { path: '/community',      component: { template: window.puglatizer.pages.community()}},
    { path: '/notifications',  component: { template: window.puglatizer.pages.notifications()}},
    { path: '/privacy-policy', component: { template: window.puglatizer.pages.privacy()}},
    { path: '/privacy',        component: { template: window.puglatizer.pages.privacy_landing()}},
    { path: '/terms',        component: { template: window.puglatizer.pages.terms()}},
    { path: '/feedback',            component: { template: window.puglatizer.pages.feedback()}},
    { path: '/contact',             component: { template: window.puglatizer.pages.contact()}},



    //- special routes-------------------------------------------------------------//
    { path: '/business/register',   
      component: { 
        template: window.puglatizer.pages.business_register(),
        mounted(){
          addressVal.init('#business','#business-addr');
          phoneVal.init('#business-phone');
        }
      }
    },
    { path: '/healthcare/register', 
      component: { 
        template: window.puglatizer.pages.healthcare_register(),
        mounted(){
          addressVal.init('#healthcare','#healthcare-addr');
          phoneVal.init('#healthcare-phone');
        }
      }
    },
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
        //controller.init();
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
            scanning.start(video, canvasElement, canvas);
            $('body').on('click', '#nav-main-x', () => {
              stream.getTracks().forEach(track => {
                track.stop();
              });
              scanning.stop();
              router.push('/').catch(err => {})
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

  // $('body').on('click', '#register-healthcare', () => {
  //   $('#modal-register-healthcare').modal('show');
  // });
  // $('body').on('click', '#register-business', () => {
  //   $('#modal-register-business').modal('show');
  // });
  
  $('body').on('click', '#privacy-policy', () => {
    console.log('show policy');
    $('#modal-privacy-policy').modal('show');
  });
  $('body').on('click', '#show-registration', () => {
    $('#modal-register-notice').modal('show');
  });

  // Form Handlers (Need refactor) --------------------------------------------------//

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


  // Forms (Need refactor) --------------------------------------------------//


  $('body').on('submit','form.register-business', (e)=>{
    e.preventDefault();
    $('#submit-business').addClass('btn-loading');
    const formElements = {};
    $(e.currentTarget).serializeArray().map((entry) => {
      formElements[entry['name']] = entry['value']
    });
    //formElements['modal_id'] = '#modal-register-business';
    formElements['modal_id'] = '#body-business-register';
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
    //formElements['modal_id'] = '#modal-register-healthcare';
    formElements['modal_id'] = '#body-healthcare-register';
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
  });

});