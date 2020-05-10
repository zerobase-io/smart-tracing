import './assets/css/tabler.css';
import './assets/css/icons.css';
import './assets/css/layout.css';
import './assets/css/scanner.css';
import './assets/css/overrides.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './service-worker';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
