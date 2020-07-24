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
                <Route path={MAP_ROUTE} component={DataPage} exact />
                {/* {
                    this.props.profileId ?
                        <Route path={USER_ROUTE} component={UserPage} exact />
                        : <Redirect from={USER_ROUTE} to="/"/>
                } */}
                <Route component={() => <div>Not found</div>} />
            </Switch>
        );
    }
}

export default connect(
    null,
    // state => ({
    //     profileId: state.processingState.profileId,
    // }), 
    null
)(App);
