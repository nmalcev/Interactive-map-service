import React from 'react';
import {connect} from 'react-redux';
import SearchForm from './SearchForm/SearchForm';
import FeatureItem from './FeatureItem/FeatureItem';
import {navigateToPlace} from './../../../store/actions/mainActions';
import './IndexPage.scss';

const IndexPage = props => {
    return (
        <div className="container">
            <header className="IndexPage__logo mb-5 mt-3">
                <div className="IndexPage__container">
                    <h1 className="IndexPage__title">Any place you want</h1>
                    <p className="IndexPage__sub-title text-secondary">Enter any place and the service will find its location</p>
                    <SearchForm />
                </div>
            </header>
            {props.isLoading && (
                <div className="IndexPage-spinner">
                    <div className="spinner-border text-primary"></div>
                    <p className="text-secondary">Looking for suitable options</p>
                </div>
            )}
            {props.features.length > 0 && (
                <>
                    <p>Results for "{props.lastQuery}":</p>
                    <ol>
                        {props.features.map(feature => {
                            return (<li key={feature.id} onClick={() => props.onNavigate(feature.id, props.history)}>
                                <FeatureItem feature={feature}/>
                            </li>);
                        })}
                    </ol>
                </>
            )}
        </div>
    );
};

export default connect(
    state => {
        return {
            lastQuery: state.mainState.lastQuery,
            features: state.mainState.features,
            isLoading: state.mainState.isLoading
        };
    },
    dispatch => ({
        onNavigate: (featureId, history) => dispatch(navigateToPlace(featureId, history))
    })
)(IndexPage);
