// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configure from './store/Index';

const store = configure();

ReactDOM.render(
    <Root store={store} />,
        document.getElementById('app')
);