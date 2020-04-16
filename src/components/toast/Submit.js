import React from 'react';
import template from '../../templates/toast/submit.pug';

class Submit extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default Submit;
