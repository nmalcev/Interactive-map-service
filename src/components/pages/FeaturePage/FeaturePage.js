import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import DisplayFeature from './DisplayFeature/DisplayFeature';
import './FeaturePage.scss';

const featurePage = props => {
	return (
        <div className="FeaturePage">
            <header className="FeaturePage__header d-flex align-items-center">
                <Link to="/">return</Link>
                <h4 className="text-secondary flex-fill mb-0 ml-5">{props.activeFeature.properties.name}</h4>
            </header>
            <main className="FeaturePage__main">
                <DisplayFeature feature={props.activeFeature}/>
            </main>
        </div>
    );
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
)(featurePage);
