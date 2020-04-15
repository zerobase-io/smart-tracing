import React from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import template from '../../templates/pages/home.pug';

class Home extends React.Component {
  componentDidMount() {
    const hostname = window.location.hostname.split('.')[0];
    console.log('Hostname: ', hostname);
    if (hostname === 'localhost' || hostname === 'staging') {
      $('body').on('click', '#scan-button', () => {
        this.props.history.push('/s/0724ce8a-05ac-496c-a66b-12573c2221fc');
      });
    }
  }

  render() {
    return template.call(this, {});
  }
}

export default withRouter(Home);
