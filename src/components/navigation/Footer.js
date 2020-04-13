import React from 'react';
import template from '../../../templates/navigation/footer.pug';

class Footer extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default Footer;
