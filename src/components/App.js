import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import IndexPage from './pages/IndexPage/IndexPage';
import {MAP_ROUTE} from './routes/routes';
import loadComponent from './hoc/LoadComponent/LoadComponent';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={IndexPage} exact />
                {
                    this.props.featureId ?
                        <Route path={MAP_ROUTE} render={loadComponent(
                            () => import('./pages/FeaturePage/FeaturePage'),
                            <h3>Loading...</h3>
                        )} exact />
                        : <Redirect from={MAP_ROUTE} to="/"/>
                }
                <Route component={() => <div>Not found</div>} />
            </Switch>
        );
    }
}

export default connect(
    state => ({
        featureId: state.mainState.featureId,
    }),
    null 
)(App);
