import React from 'react';

// with comma or nothing
function withComma(value) {
    return value ? value + ', ' : '';
}

const featureItem = props => {
    const {properties} = props.feature;
    console.log('Feature Item');
    console.dir(props.feature);
    const streetAddress = [properties.housenumber || '', properties.street, ''].join(' ').trim();
    const address = `${withComma(streetAddress)}${properties.postcode || ''} ${properties.state}`;

    return (
        <>
            <h3>{withComma(properties.name)}{properties.osm_value}</h3>
            <p>{withComma(properties.city)}{properties.country}</p>
            <p>{address}</p>
        </>
    );
};

export default featureItem;