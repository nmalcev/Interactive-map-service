import React from 'react';
import './FeatureItem.scss';

// with comma or nothing
function withComma(value) {
    return value ? value + ', ' : '';
}

const featureItem = props => {
    const {properties} = props.feature;
    const streetAddress = [properties.housenumber || '', properties.street, ''].join(' ').trim();
    const address = `${withComma(streetAddress)}${properties.postcode || ''} ${properties.state}`;

    return (
        <div className="FeatureItem">
            <h3 className="FeatureItem__title text-primary">{withComma(properties.name)}{properties.osm_value}</h3>
            <p className="FeatureItem__address">{withComma(properties.city)}{properties.country}</p>
            <p className="FeatureItem__address">{address}</p>
        </div>
    );
};

export default featureItem;