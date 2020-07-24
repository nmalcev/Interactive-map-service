import React, { useCallback } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './InstaForm.scss';

import InstaInput from '../../../UI/InstaInput/InstaInput';
import InstaButton from '../../../UI/InstaButton/InstaButton';
import {processUserProfile} from '../../../../store/actions/processing';
import { extractUserId } from '../../../../utils/parsers';

const placeholderText = 'Username or page link';

const instaForm = props => {
    const onSubmitHandler = useCallback(e => {
        e.preventDefault();
        const inputedValue = e.target.elements.iguser.value;

        console.log('InstaForm');
        console.dir(props.history);
        console.dir(props);
        props.onIgUser(extractUserId(inputedValue), props.history);
    }, [props.onIgUser]);

    return (
        <form className="InstaForm" onSubmit={onSubmitHandler}>
            <div className="InstaForm__input">
                <InstaInput placeholder={placeholderText} name="iguser"/>
            </div>
            <div className="InstaForm__button">
                <InstaButton type="submit"/>
            </div>
        </form>
    );
}

export default connect(
    null,
    dispatch => ({
        onIgUser: (userName, history) => dispatch(processUserProfile(userName, history))
    })
)(withRouter(instaForm));