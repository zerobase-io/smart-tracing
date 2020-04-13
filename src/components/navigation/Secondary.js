import React from 'react';
import template from '../../../templates/navigation/secondary.pug';

class Secondary extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default Secondary;
