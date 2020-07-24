import React, { Component } from 'react';
import {connect} from 'react-redux';
import DisplayFeature from './DisplayFeature/DisplayFeature';

class DataPage extends Component {
	render() {
        return (
            <>
                <h1>DataPage</h1>
                <DisplayFeature feature={this.props.activeFeature}/>
            </>
        );
	}
}

export default connect(
    state => {
        const featureId = state.mainState.featureId;
        const activeFeature = state.mainState.features.find(feature => feature.id === featureId);

        console.log('STATE');
        console.dir(state);
        
        return ({
            activeFeature,
        });
    },
    null
    // dispatch => ({
    //     getFollowingList: igUserId => dispatch(getFollowingListThunk(igUserId)),
    // })
)(DataPage);
