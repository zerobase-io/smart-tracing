import React from 'react';
import template from '../../templates/modal/register-healthcare.pug';

class RegisterHealthcare extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default RegisterHealthcare;
