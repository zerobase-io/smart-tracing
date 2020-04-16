import React from 'react';
import template from '../../templates/modal/register.pug';

class Register extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default Register;
