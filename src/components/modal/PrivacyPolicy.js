import React from 'react';
import template from '../../../templates/modal/privacy_policy.pug';

class PrivacyPolicy extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default PrivacyPolicy;
