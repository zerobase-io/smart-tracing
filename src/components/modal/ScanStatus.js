import React from 'react';
import template from '../../../templates/modal/scan_status.pug';

class ScanStatus extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default ScanStatus;
