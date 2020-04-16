import React from 'react';

import phoneVal from '../../lib/phoneVal';
import addressVal from '../../lib/addressVal';
import template from '../../templates/pages/business_register.pug';

class BusinessRegister extends React.Component {
  componentDidMount() {
    addressVal.init('#business', '#business-addr');
    phoneVal.init('#business-phone');
  }

  render() {
    return template.call(this, {});
  }
}

export default BusinessRegister;
