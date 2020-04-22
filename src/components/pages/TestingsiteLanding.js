import React from 'react';
import template from '../../templates/pages/testingsite_landing.pug';

class TestingsiteLanding extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default TestingsiteLanding;
