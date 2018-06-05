import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

//Views

// Dashboard
import Dashboard from './../components/landing/LandingContainer';

export default class Routes extends Component {

    render () {

        const { 
            dispatch
        } = this.props;

        return (
            <Switch>
                <Route exact={true} path="/" render={(props) => <Dashboard {...props} dispatch={dispatch} /> } />

                {/* <Route exact={true} path="/videos" render={(props) => <VideoList {...props} dispatch={dispatch} /> } />
                <Route path="/videos/create" render={(props) => <VideoCreate {...props} dispatch={dispatch} /> } />
                <Route path="/videos/view/:id" render={(props) => <VideoView {...props} dispatch={dispatch} /> } />
                <Route path="/videos/update/:id" render={(props) => <VideoUpdate {...props} dispatch={dispatch} /> } /> */}
            </Switch>
        )
    }
}