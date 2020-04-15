import React from 'react';
import template from '../../templates/views/errors/404.pug';

class NotFound extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default NotFound;
