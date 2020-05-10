import React from 'react';
import template from '../../templates/modal/register-business.pug';

class RegisterBusiness extends React.Component {
    render() {
        return template.call(this, {});
    }
}

export default RegisterBusiness;
