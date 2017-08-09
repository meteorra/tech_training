import React from 'react';
import PropTypes from 'prop-types';

const PropertyTable = ({ tableItems : { temp, visibility, windSpeed, }, }) => {
    return (
        <div className="property-table">
            <div className="property-table-item temp-item">Current temperature: {temp}</div>
            <div className="property-table-item visibility-item">Current visibility: {visibility}</div>
            <div className="property-table-item wind-item">Current speed of wind: {windSpeed}</div>
        </div>
    );

};

PropertyTable.propTypes = {
    tableItems: PropTypes.shape({
        temp: PropTypes.number,
        visibility: PropTypes.number,
        windSpeed: PropTypes.number,
    }),
};

export default PropertyTable;
