import React from 'react';
import template from '../../../templates/modal/register_notifications.pug';

class RegisterNotifications extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default RegisterNotifications;
