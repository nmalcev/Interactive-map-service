import React from 'react';
import './InstaButton.scss';

const instaButton = props => {
    return (
        <button className="InstaButton" {...props}>
            <div className="InstaButton__container">
                <div className="InstaButton__shape"></div>
            </div>
        </button>
    );
};

export default instaButton;