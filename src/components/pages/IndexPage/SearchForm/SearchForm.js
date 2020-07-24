import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
// import './InstaForm.scss';

// import InstaInput from '../../../UI/InstaInput/InstaInput';
// import InstaButton from '../../../UI/InstaButton/InstaButton';
// import {processUserProfile} from '../../../../store/actions/processing';
// import { extractUserId } from '../../../../utils/parsers';

const placeholderText = 'Username or page link';

const searchForm = props => {
    const onSubmitHandler = e => {
        e.preventDefault();
        // const inputedValue = e.target.elements.iguser.value;

        console.log('SearchForm');
        console.dir(props.history);
        console.dir(props);
        // props.onIgUser(extractUserId(inputedValue), props.history);
    };

    return (
        <form className="SearchForm" onSubmit={onSubmitHandler}>
            <p>TODO</p>
        </form>
    );
}

export default connect(
    null,
    null
    // dispatch => ({
    //     onIgUser: (userName, history) => dispatch(processUserProfile(userName, history))
    // })
)(withRouter(searchForm));