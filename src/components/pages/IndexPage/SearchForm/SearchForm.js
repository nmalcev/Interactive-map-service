import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {findPlace} from '../../../../store/actions/mainActions';

const placeholderText = 'Enter a place name';
const INPUT_NAME = 'query';

const searchForm = props => {
    const onSubmitHandler = e => {
        e.preventDefault();
        const inputedValue = e.target.elements[INPUT_NAME].value;

        console.log('SearchForm');
        console.dir(props.history);
        console.dir(props);

        props.onSearch(inputedValue.trim());
    };

    return (
        <form className="SearchForm" onSubmit={onSubmitHandler}>
            <input type="text" name={INPUT_NAME} placeholder={placeholderText} disabled={props.isLoading}/>
            <button type="submit" disabled={props.isLoading}>Submit</button>
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