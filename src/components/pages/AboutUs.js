import React from 'react';
import template from '../../templates/pages/about_us.pug';

class AboutUs extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default AboutUs;
