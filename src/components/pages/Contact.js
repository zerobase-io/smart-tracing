import React from 'react';
import template from '../../templates/pages/contact.pug';

class Contact extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default Contact;
