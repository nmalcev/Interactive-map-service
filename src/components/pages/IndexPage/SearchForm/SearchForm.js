import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {findPlace} from '../../../../store/actions/mainActions';

const placeholderText = 'ex: musée d’orsay';
const INPUT_NAME = 'query';

const searchForm = props => {
    const onSubmitHandler = e => {
        e.preventDefault();
        const inputedValue = e.target.elements[INPUT_NAME].value;
        props.onSearch(inputedValue.trim());
    };

    return (
        <form className="SearchForm form-inline" onSubmit={onSubmitHandler}>
            <input 
                className="form-control mx-sm-3 mb-2"
                type="text" 
                name={INPUT_NAME} 
                placeholder={placeholderText} 
                disabled={props.isLoading}
            />
            <button
                className="btn btn-primary mb-2" 
                type="submit" 
                disabled={props.isLoading}
            >Submit</button>
        </form>
    );
}

export default connect(
    state => ({
        isLoading: state.mainState.isLoading
    }),
    dispatch => ({
        onSearch: (query) => dispatch(findPlace(query))
    })
)(withRouter(searchForm));