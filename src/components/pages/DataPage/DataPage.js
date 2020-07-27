import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import DisplayFeature from './DisplayFeature/DisplayFeature';

class DataPage extends Component {
	render() {
        return (
            <>
                <Link to="/">Return</Link>    
                <DisplayFeature feature={this.props.activeFeature}/>
            </>
        );
	}
}

export default connect(
    state => {
        const featureId = state.mainState.featureId;
        const activeFeature = state.mainState.features.find(feature => feature.id === featureId);

        return ({
            activeFeature,
        });
    },
    null
)(DataPage);
