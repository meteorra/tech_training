import React from 'react';
import PropTypes from 'prop-types';

// TODO: discuss if there are no outer dependecies should we wrap component into a function
const PropertyTable = ({ tableItems : { temp, visibility, windSpeed, }, }) => {
    return (
        <div>
            <div>Current temperature: {temp}</div>
            <div>Current visibility: {visibility}</div>
            <div>Current speed of wind: {windSpeed}</div>
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
