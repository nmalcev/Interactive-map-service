import React from 'react';
import {connect} from 'react-redux';
import SearchForm from './SearchForm/SearchForm';
import FeatureItem from './FeatureItem/FeatureItem';
import {navigateToPlace} from './../../../store/actions/mainActions';


const IndexPage = props => {
    return (
        <>
            <h1>IndexPage</h1>
            <div style={{width: '380px', margin: '0 auto' }}>
                <SearchForm />
            </div>
            {props.isLoading && (
                <p>Looking for suitable options</p>
            )}
            <ol>
                {props.features.map(feature => {
                    return (<li key={feature.id} onClick={() => props.onNavigate(feature.id, props.history)}>
                        <FeatureItem feature={feature}/>
                    </li>);
                })}
            </ol>
        </>
    );
};

export default connect(
    state => {
        return {
            features: state.mainState.features,
            isLoading: state.mainState.isLoading
        };
    },
    dispatch => ({
        onNavigate: (featureId, history) => dispatch(navigateToPlace(featureId, history))
    })
)(IndexPage);
