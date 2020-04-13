import React from 'react';
import template from '../../../templates/pages/feedback.pug';

class Feedback extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default Feedback;
