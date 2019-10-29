import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

const Root = () => (
    <div>
        <HashRouter>
            <App></App>
        </HashRouter>
    </div>
);

export default Root;