import React from 'react';
import template from '../../templates/navigation/primary.pug';

class Primary extends React.Component {
    render() {
        return template.call(this, {});
    }
}

export default Primary;
