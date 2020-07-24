import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import IndexPage from './pages/IndexPage/IndexPage';
import DataPage from './pages/DataPage/DataPage';
import {MAP_ROUTE} from './routes/routes';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={IndexPage} exact />
                {
                    this.props.featureId ?
                        <Route path={MAP_ROUTE} component={DataPage} exact />
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
