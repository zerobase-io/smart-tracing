import React from 'react';
import template from '../../../templates/pages/business_landing.pug';

class BusinessLanding extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default BusinessLanding;
