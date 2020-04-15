import React from 'react';
import template from '../../templates/pages/healthcare_register.pug';

class HealthCareRegister extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default HealthCareRegister;
