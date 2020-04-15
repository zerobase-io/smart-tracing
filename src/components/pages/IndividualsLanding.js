import React from 'react';
import template from '../../templates/pages/individuals_landing.pug';

class IndividualsLanding extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default IndividualsLanding;
