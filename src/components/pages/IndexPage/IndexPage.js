import React, {useState} from 'react';
import './IndexPage.scss';
import InstaForm from './InstaForm/InstaForm';


const IndexPage = props => {
    return (
        <>
            <h1>Map</h1>
            <div style={{width: '380px', margin: '0 auto' }}>
                <InstaForm />
            </div>

        </>
    );
};

export default IndexPage;
