// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint no-undef: 0 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import template from '../../templates/pages/home.pug';

class Home extends React.Component {
  componentDidMount() {
    const hostname = window.location.hostname.split('.')[0];
    console.log('Hostname: ', hostname);
    if (hostname === 'localhost' || hostname === 'staging') {
      $('body').on('click', '#scan-button', () => {
        this.props.history.push('/s/aa90875a-e15e-4b7e-97e9-fde8cda615b2');
      });
    }
  }

  render() {
    return template.call(this, {});
  }
}

export default withRouter(Home);
