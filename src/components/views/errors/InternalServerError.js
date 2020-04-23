import React from 'react';
import template from '../../../templates/views/errors/500.pug';

class InternalServerError extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default InternalServerError;
