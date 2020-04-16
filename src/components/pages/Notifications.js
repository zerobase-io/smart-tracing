import React from 'react';
import template from '../../templates/pages/notifications.pug';

class Notifications extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default Notifications;
