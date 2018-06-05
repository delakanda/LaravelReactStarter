import { createStore, applyMiddleware } from 'redux';

import reducers from './../reducers/Index';

export default function configure() {
    const store = createStore(
        reducers
    );

    return store;
}