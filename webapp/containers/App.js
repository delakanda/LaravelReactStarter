import React, {  Component, PropTypes } from 'react';
import { connect }  from 'react-redux';

import { HashRouter } from 'react-router-dom';

import Routes from './../routes/Index';

// import Header from './../components/partials/header';
// import Footer from './../components/partials/footer';
// import SideNav from './../components/partials/side_nav';

import Notification from './../components/elements/NotificationBar';
// import Spinner from './../components/partials/spinner';

export class App extends Component {

    render () {
        const {
            dispatch,
            notification,
            spinner,
            globals
        } = this.props

        return (
            <HashRouter>
                <div id = "app-wrapper">
                    
                    <Notification notification={notification}
                        dispatch={dispatch} />

                    <Routes dispatch={dispatch} />

                </div>
            </HashRouter>
        );
    }

}

export default connect((store) => {

    return {
        notification: store.notification,
        globals: store.globals
    };

})(App)