import React from 'react';
import template from '../../templates/pages/news.pug';

class News extends React.Component {
    render() {
        return template.call(this, {});
    }
}

export default News;
