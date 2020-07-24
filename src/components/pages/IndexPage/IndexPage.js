import React, {useState} from 'react';
// import './IndexPage.scss';
import SearchForm from './SearchForm/SearchForm';


const IndexPage = props => {
    return (
        <>
            <h1>IndexPage</h1>
            <div style={{width: '380px', margin: '0 auto' }}>
                <SearchForm />
            </div>

        </>
    );
};

export default IndexPage;
