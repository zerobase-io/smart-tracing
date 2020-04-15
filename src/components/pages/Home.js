import React from 'react';
import template from '../../templates/pages/home.pug';

class Home extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default Home;
