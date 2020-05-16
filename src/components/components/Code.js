import React from 'react';
import template from '../../templates/components/code.pug';

class Code extends React.Component {
    render() {
        return template.call(this, {});
    }
}

export default Code;
