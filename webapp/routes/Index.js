import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

//Views

// Dashboard
import Dashboard from './../components/app/dashboard/dash_index_cont';

export default class Routes extends Component {

    render () {

        const { 
            dispatch
        } = this.props;

        return (
            <Switch>
                <Route exact={true} path="/" render={(props) => <Dashboard {...props} dispatch={dispatch} /> } />

                <Route exact={true} path="/videos" render={(props) => <VideoList {...props} dispatch={dispatch} /> } />
                <Route path="/videos/create" render={(props) => <VideoCreate {...props} dispatch={dispatch} /> } />
                <Route path="/videos/view/:id" render={(props) => <VideoView {...props} dispatch={dispatch} /> } />
                <Route path="/videos/update/:id" render={(props) => <VideoUpdate {...props} dispatch={dispatch} /> } />

                <Route path="/videos/:videoId/season/:seasonId/episodes" render={(props) => <VideoSeasonEpisodes {...props} dispatch={dispatch} /> } />

                <Route exact={true} path="/categories" render={(props) => <CategoryList {...props} dispatch={dispatch} /> } />
                <Route path="/categories/create" render={(props) => <CategoryCreate {...props} dispatch={dispatch} /> } />
                <Route path="/categories/update/:id" render={(props) => <CategoryUpdate {...props} dispatch={dispatch} /> } />

                <Route exact={true} path="/casts" render={(props) => <CastsList {...props} dispatch={dispatch} /> } />
                <Route path="/casts/create" render={(props) => <CastsCreate {...props} dispatch={dispatch} /> } />
                <Route path="/casts/update/:id" render={(props) => <CastsUpdate {...props} dispatch={dispatch} /> } />

                <Route exact={true} path="/apps" render={(props) => <AppList {...props} dispatch={dispatch} /> } />
                <Route path="/apps/create" render={(props) => <AppCreate {...props} dispatch={dispatch} /> } />
                <Route path="/apps/update/:id" render={(props) => <AppUpdate {...props} dispatch={dispatch} /> } /> 

                <Route exact={true} path="/subscribers" render={(props) => <SubscribersList {...props} dispatch={dispatch} /> } />

                <Route exact={true} path="/publishers" render={(props) => <PublisherList {...props} dispatch={dispatch} /> } />
                <Route path="/publishers/create" render={(props) => <PublisherCreate {...props} dispatch={dispatch} /> } />
                <Route path="/publishers/update/:id" render={(props) => <PublisherUpdate {...props} dispatch={dispatch} /> } />
            </Switch>
        )
    }
}