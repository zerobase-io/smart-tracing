import React from 'react';

import phoneVal from '../../lib/phoneVal';
import addressVal from '../../lib/addressVal';
import template from '../../templates/pages/healthcare_register.pug';

class HealthCareRegister extends React.Component {
  componentDidMount() {
    addressVal.init('#healthcare', '#healthcare-addr');
    phoneVal.init('#healthcare-phone');
  }

  render() {
    return template.call(this, {});
  }
}

export default HealthCareRegister;
