import React, {  Component, PropTypes } from 'react';
import { connect }  from 'react-redux';

import { IndexRoute, IndexRedirect } from 'react-router';
import { HashRouter, Switch, Route } from 'react-router-dom';

// import MainLayout from './../components/layout/main';
import Routes from './../routes/Index';

// import Header from './../components/partials/header';
// import Footer from './../components/partials/footer';
// import SideNav from './../components/partials/side_nav';

// import Notification from './../components/partials/notification';
// import Spinner from './../components/partials/spinner';

export class App extends Component {

    render () {
        // const currentRoute = this.props.children.props.path;
        const {
            dispatch,
            notification,
            spinner,
            globals
        } = this.props

        return (
            <HashRouter>
                <div id = "app-wrapper">
                    <Header/>
                        <div className="row">
                            <div className="col-md-2">
                                <SideNav globals={globals} />
                            </div>
                            <div className="col-md-10">
                                <div id = "main-container">

                                    <Spinner spinner={spinner}
                                        dispatch={dispatch} />

                                    <Notification notification={notification}
                                        dispatch={dispatch} />

                                    <Routes dispatch={dispatch} />
                                    
                                </div>
                            </div>
                        </div>
                    <Footer />
                </div>
            </HashRouter>
        );
    }

}

export default connect((store) => {

    return {
        notification: store.notification,
        spinner: store.spinner,
        globals: store.globals
    };

})(App)