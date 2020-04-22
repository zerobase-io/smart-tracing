// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint no-undef: 0 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Home from '../pages/Home';
import controller from '../../lib/controller';

class Scanner extends React.Component {
  componentDidMount() {
    // stateless functional component -> function component to replicate lifecycle behavior
    const sdvid = this.props.match.params.sdvid;
    const dvid =
      localStorage.getItem('dvid') === 'undefined'
        ? undefined
        : localStorage.getItem('dvid');
    window.history.replaceState(null, null, '/');

    if (sdvid && window.innerWidth < 750) {
      console.log('has sdvid and smartphone dimensions');
      if (dvid) {
        console.log('Has registered ID on scan');
        $('#modal-scan-notice').modal('show');
        // Please note this callback pattern to pass data down the "chain"
        // Unfortunately cannot use Async Await due to coverage issues.
        controller.fingerprint({ sdvid }, (fingerprintData) => {
          controller.scan(fingerprintData, () => {
            this.props.history.push('/');
          });
        });
        // controller.fetchIP({ sdvid }, (data) => {
        //   controller.fingerprint(data, (fingerprintData) => {
        //     controller.scan(fingerprintData, () => {
        //       // Pushing to the router history
        //       this.props.history.push('/');
        //     });
        //   });
        // });
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
          controller.fingerprint({ sdvid }, (fingerprintData) => {
            console.log('fingerprint -> create :', fingerprintData);
            controller.create(fingerprintData, (createData) => {
              console.log('create -> scan: ', createData);
              controller.scan(createData, () => {
                // Pushing to the router history
                this.props.history.push('/');
              });
            });
          });
          // controller.fetchIP({ sdvid }, (data) => {
          //   console.log('IP -> fingerprint:', data);
          //   controller.fingerprint(data, (fingerprintData) => {
          //     console.log('fingerprint -> create :', fingerprintData);
          //     controller.create(fingerprintData, (createData) => {
          //       console.log('create -> scan: ', createData);
          //       controller.scan(createData, () => {
          //         // Pushing to the router history
          //         this.props.history.push('/');
          //       });
          //     });
          //   });
          // });
        });
      }
    } else {
      console.log('Invalid Access Point');
      // Pushing to the router history
      this.props.history.push('/');
    }
  }
  render() {
    return <Home />;
  }
}

export default withRouter(Scanner);
