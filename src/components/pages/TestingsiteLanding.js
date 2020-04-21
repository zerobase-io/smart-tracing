/* eslint-disable no-undef */
import React from 'react';
import Home from '../pages/Home';

class TestingsiteLanding extends React.Component {
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
    return <Home />;
  }
}

export default TestingsiteLanding;
