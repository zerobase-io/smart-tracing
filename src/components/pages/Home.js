// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint no-undef: 0 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import template from '../../templates/pages/home.pug';

class Home extends React.Component {
  render() {
    return template.call(this, {});
  }
}

export default withRouter(Home);
